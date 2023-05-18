import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../erros";

const verifyIfUserDeleteMiddleware = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    const userId: number = parseInt(req.params.id)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const verifyUser = await userRepository.findOne({
        where:{
            id: userId
        },
        withDeleted: true
    })

    if(verifyUser?.deletedAt !== null){
        throw new AppError("User not found", 404)
    }

    return next()
}

export { verifyIfUserDeleteMiddleware }