import { Repository } from "typeorm"
import { TCategory, TCategoryRequest } from "../../interfaces/category.interface"
import { Category } from "../../entities"
import { AppDataSource } from "../../data-source"
import { categorySchema } from "../../schemas/category.schema"

const createCategoryService = async (data:TCategoryRequest) => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const addCategory: Category = categoryRepository.create(data)
   const save = await categoryRepository.save(addCategory)
    console.log(save)

    const returnCategory: TCategory =  categorySchema.parse(save)

    return returnCategory

}

export { createCategoryService }