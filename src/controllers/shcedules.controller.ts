import { Request, Response } from "express";
import { TShceduleRequest } from "../interfaces/shcedules.interface";
import { createScheduleService } from "../services/schedules/createSchedule.service";
import { listScheduleService } from "../services/schedules/listSchedule.service";

const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = parseInt(res.locals.idToken)
    const data: TShceduleRequest = req.body

    const create = await createScheduleService(userId, data)

    return res.status(201).json({"message": "Schedule created"})
}

const listSchedulesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstateId: number = parseInt(req.params.id)

    const list = await listScheduleService(realEstateId)

    return res.json(list)
}

export { createSchedulesController, listSchedulesController }