import { Repository } from "typeorm"
import { TUserResponse, TUserUpdateRequest } from "../../interfaces/user.interfaces"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { userSchemaResponse } from "../../schemas/users.schemas"

const updateUserService = async (data: TUserUpdateRequest, userId:number): Promise<TUserResponse> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUSerData = await userRepository.findOne({
        where: {
            id: userId
        }
    }
    )
    
    const newUserdata: User = await userRepository.create({
        ... oldUSerData,
        ... data
    })
    await userRepository.save(newUserdata)

    const updateUserReturn: TUserResponse = userSchemaResponse.parse(newUserdata)

    return updateUserReturn

}

export { updateUserService }