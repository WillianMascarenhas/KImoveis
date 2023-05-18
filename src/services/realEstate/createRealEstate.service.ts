import { Repository } from "typeorm"
import { TRealEstateInterfaceRequest, TRealEstateInterfaceResponse } from "../../interfaces/realEstate.interfaces"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities/realEstate.entity"
import { Address, Category } from "../../entities"
import { realEstateSchemaResponse } from "../../schemas/realEstate.schemas"
import { AppError } from "../../erros"

const createRealEstateService = async(data: TRealEstateInterfaceRequest): Promise<TRealEstateInterfaceResponse> =>{
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    
    const dataAddress = data.address
    
    delete data.address
 
    const newAddress: Address = addressRepository.create(dataAddress!)
    await addressRepository.save(newAddress)

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory: Category | null = await categoryRepository.findOne({
        where: {
            id: data.categoryId
        }
    })
    if(!findCategory){
        throw new AppError("Category not find", 404)
    }

    const newRealEstate: RealEstate = realEstateRepository.create({
        ...data,
        category: findCategory,
        address: newAddress
    })

    await realEstateRepository.save(newRealEstate)


     const returnRealEstate = realEstateSchemaResponse.parse(newRealEstate)

    return returnRealEstate
}

export { createRealEstateService }