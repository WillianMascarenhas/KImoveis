import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { AppError } from "../erros";

const verifyDateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let schedulesDate = new Date(req.body.date)
    schedulesDate.getDay()


    if(schedulesDate.getDay() > 5 || schedulesDate.getDay() < 0){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    return next()
}

export { verifyDateMiddleware }

