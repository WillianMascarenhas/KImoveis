import { Router } from "express";
import { createSchedulesController, listSchedulesController } from "../controllers/shcedules.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { schedulesSchemaRequest } from "../schemas/schedule.schemas";
import { verifyIsAdminMiddleware } from "../middlewares/verifyIsAdmin.middleware";
import { verifyScheduleUserMiddleware } from "../middlewares/verifyScheduleUser.middleware";
import { verifyIdMiddleware } from "../middlewares/verifyId.middleware";
import { verifyHourMiddleware } from "../middlewares/verifyHour.middleware";
import { verifyDateMiddleware } from "../middlewares/verifyDate.middleware";

const schedulesRouter: Router = Router() 

schedulesRouter.post("",verifyTokenMiddleware, verifyDataMiddleware(schedulesSchemaRequest), verifyIdMiddleware, verifyScheduleUserMiddleware, verifyDateMiddleware, verifyHourMiddleware, createSchedulesController)
schedulesRouter.get("/realEstate/:id", verifyTokenMiddleware, verifyIsAdminMiddleware, listSchedulesController)

export { schedulesRouter }