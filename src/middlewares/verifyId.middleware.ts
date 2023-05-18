import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../erros";

const verifyIdMiddleware = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    if(req.originalUrl === "/schedules"){
        const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
        const idRealEstate  = req.body.realEstateId
        const findRelaEstate = await realEstateRepository.findOneBy({id: idRealEstate})
        if(!findRelaEstate){
            throw new AppError("RealEstate not found", 404)
        }

        return next()

    }else{

  
    const userId: number = parseInt(req.params.id)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const verifyUser = await userRepository.findOne({
        where:{
            id: userId
        },
        withDeleted: true
    })

    if(!verifyUser){
        throw new AppError("User not found", 404)
    }

    return next()
}
}

export { verifyIdMiddleware }