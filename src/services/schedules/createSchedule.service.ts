import { Repository } from "typeorm"
import { TShceduleRequest } from "../../interfaces/shcedules.interface"
import { RealEstate, Schedule, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { schedulesSchema, schedulesSchemaResponse } from "../../schemas/schedule.schemas"
import { AppError } from "../../erros"

const createScheduleService = async (userIdToken: number, data: TShceduleRequest) => {

    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findRelaEstate: RealEstate | null = await realEstateRepository.findOneBy(
        {id: data.realEstateId}
    )

    console.log(findRelaEstate)

    const findUser: User | null = await userRepository.findOneBy(
        {id: userIdToken}
    )

    if(!findRelaEstate){
        throw new AppError("RealEstate not found", 404)
    }

    const createSchedule = schedulesRepository.create({
        date: data.date,
        hour: data.hour,
        realEstate: findRelaEstate!,
        user: findUser!
    })

    const newSchedule = await schedulesRepository.save(createSchedule)

    return 
}

export { createScheduleService }