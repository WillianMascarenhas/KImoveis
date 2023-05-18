import { NextFunction, Request, Response } from "express"
import { AppError } from "../erros"

const verifyIsAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
const isAdmin = res.locals.admin
const idToken:number = parseInt(res.locals.idToken)
const idUser:number = parseInt(req.params.id)

if(req.method === "PATCH"){
    if(idToken === idUser || isAdmin === true){
        return next()
    }
    throw new AppError("Insufficient permission", 403)
}

if(!isAdmin){
    throw new AppError("Insufficient permission", 403)
}

    return next()
}

export { verifyIsAdminMiddleware }