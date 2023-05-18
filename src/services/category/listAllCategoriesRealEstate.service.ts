import { Repository } from "typeorm"
import { Category } from "../../entities"
import { AppDataSource } from "../../data-source"

const listAllCategoriesRealEstateService = async () =>{
    const categoryrepsitory: Repository<Category> = AppDataSource.getRepository(Category)

    const listAll = await categoryrepsitory.find()

    return listAll

}

export { listAllCategoriesRealEstateService }