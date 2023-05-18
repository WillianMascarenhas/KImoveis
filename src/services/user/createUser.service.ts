import { Repository } from "typeorm";
import { User } from "../../entities";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { hash } from "bcryptjs";

const crateUserService = async (data: TUserRequest):Promise<TUserResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const newUser: User = userRepository.create(data)
    await userRepository.save(newUser)

    const returnUser = userSchemaResponse.parse(newUser)

    return returnUser
}

export { crateUserService }