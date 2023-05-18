import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities/realEstate.entity"
import { TRealEstateInterfaceResponse } from "../../interfaces/realEstate.interfaces"
import { realEstatesSchemaResponse } from "../../schemas/realEstate.schemas"

const listRealStatesServices = async (): Promise<TRealEstateInterfaceResponse[]> => {

    const realEstatesRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const list = await realEstatesRepository.find({
        relations: {
            address: true
        }
    })

    return list
}

export { listRealStatesServices }