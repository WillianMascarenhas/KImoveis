import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { AppError } from "../erros";

const verifyHourMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let schedulesHour = req.body.hour
    
    schedulesHour = schedulesHour.split(":")

    if(parseInt(schedulesHour[0]) >= 18 || parseInt(schedulesHour[0]) <= 8){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }
    
    return next()

}

export { verifyHourMiddleware }