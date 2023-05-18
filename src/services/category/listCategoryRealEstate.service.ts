import { Repository } from "typeorm"
import { Category } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../erros"

const listCategoryRealEstateService = async (cetegoryId: number) => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory: Category | null = await categoryRepository.findOne({
        where: {
            id: cetegoryId
        },
        relations:{
            realEstate: true
        }
    })

    if(!findCategory){
        throw new AppError("Category not found", 404)
    }

    return findCategory
}

export { listCategoryRealEstateService }