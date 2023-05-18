import { Request, Response } from "express";
import { TLogin, TLoginReponse } from "../interfaces/login.interfaces";
import { loginService } from "../services/login/login.service";

const loginController = async (req: Request, res: Response): Promise<Response> => {
    const data: TLogin = req.body

    const login = await loginService(data)

    return res.status(200).json(login)

}

export { loginController }