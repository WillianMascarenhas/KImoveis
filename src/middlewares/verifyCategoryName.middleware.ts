import { NextFunction, Request, Response,  } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { TCategoryRequest } from "../interfaces/category.interface";
import { AppError } from "../erros";

const verifyCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{

    const data: TCategoryRequest = req.body

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const findCategory = await categoryRepository.findOneBy({name: data.name})

    if(findCategory){
        throw new AppError("Category already exists", 409)
    }

    return next()

}

export { verifyCategoryName }