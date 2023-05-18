import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../erros";

const verifyEmailMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const emailData:string = req.body.email
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const verifyEmail: User| null = await userRepository.findOne({
        where: {
            email: emailData
        }
    })
    if(!verifyEmail){
        return next()
    }else{
        throw new AppError("Email already exists", 409)
    }
}

export { verifyEmailMiddleware }