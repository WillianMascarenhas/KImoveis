import { Router } from "express";
import { loginController } from "../controllers/login.controllers";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { loginSchema } from "../schemas/login.schemas";

const loginRouter: Router = Router()

loginRouter.post("",verifyDataMiddleware(loginSchema), loginController)

export { loginRouter }