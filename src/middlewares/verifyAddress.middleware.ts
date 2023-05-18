import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../erros";
import { RealEstate } from "../entities/realEstate.entity";
import { Address } from "../entities";

const verifyAddressMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const dataAddress: Address = req.body.address
    
    if(req.originalUrl === "/realEstate" && req.method === "POST"){

        
        const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
        
        const verifyAddress: Address | null = await addressRepository.findOneBy({street: dataAddress.street})

        if(verifyAddress){
            throw new AppError("Address already exists", 409)
        }
 
        return next()
    }
    
    //fazer a logica da outra rota aqui

}

export { verifyAddressMiddleware }