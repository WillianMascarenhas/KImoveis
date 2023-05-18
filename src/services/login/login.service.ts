import { Repository } from "typeorm";
import { TLogin, TLoginReponse } from "../../interfaces/login.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";
import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import "dotenv/config"


const loginService = async (data: TLogin): Promise<TLoginReponse>  =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
            email: data.email
        }
    })

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }
    
    const comparePassword: boolean = await bcrypt.compare(data.password , user!.password)
    
    if(!comparePassword){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1d",
            subject: user.id.toString()
        }
    )
    

    return { token }
}

export { loginService }