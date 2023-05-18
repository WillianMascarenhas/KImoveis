import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { usersScheamResponse } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<TUserResponse[]> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const listUsers = await userRepository.find()
    
    const listReturning: TUserResponse[] = usersScheamResponse.parse(listUsers)

    return listReturning
}

export { listUsersService }