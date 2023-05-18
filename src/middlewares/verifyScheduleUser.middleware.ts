import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { AppDataSource } from "../data-source";
import { TShceduleRequest } from "../interfaces/shcedules.interface";
import { AppError } from "../erros";

const verifyScheduleUserMiddleware = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    const data :TShceduleRequest = req.body
    const userId = res.locals.idToken
    const realEstateId = data.realEstateId

    const schedulesDate: TShceduleRequest = req.body.date

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const verifyUser = await scheduleRepository
    .createQueryBuilder("schedules")
    .innerJoinAndSelect("schedules.user", "user")
    .innerJoinAndSelect("schedules.realEstate", "realEstate")
    .where("schedules.hour = :schedulesHour AND schedules.date = :schedulesDate AND user.id = :userId", {schedulesHour : data.hour, schedulesDate, userId})
    .getOne()

    if(verifyUser){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    const verifyRealEstate = await scheduleRepository
    .createQueryBuilder("schedules")
    .innerJoinAndSelect("schedules.user", "user")
    .innerJoinAndSelect("schedules.realEstate", "realEstate")
    .where("schedules.hour = :schedulesHour AND schedules.date = :schedulesDate AND realEstate.id = :realEstateId", {schedulesHour : data.hour, schedulesDate, realEstateId})
    .getOne()

    if(verifyRealEstate){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}

export { verifyScheduleUserMiddleware }