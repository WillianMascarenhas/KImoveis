import { Request, Response } from "express";
import { createCategoryService } from "../services/category/createCategory.service";
import { TCategoryRequest } from "../interfaces/category.interface";
import { listCategoryRealEstateService } from "../services/category/listCategoryRealEstate.service";
import { listAllCategoriesRealEstateService } from "../services/category/listAllCategoriesRealEstate.service";

const categoryController = async (req: Request, res: Response): Promise<Response> => {
    const data: TCategoryRequest = req.body

    const createCategory = await createCategoryService(data)

    return res.status(201).json(createCategory)
} 

const listAllCategoriesRealEstate = async (req: Request, res: Response): Promise<Response> => {

    const list = await listAllCategoriesRealEstateService()

    return res.json(list)
}

const listCategoriesRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const categoryId:number = parseInt(req.params.id)

    const list = await listCategoryRealEstateService(categoryId)

    return res.json(list)
}

export { categoryController, listCategoriesRealEstate, listAllCategoriesRealEstate }