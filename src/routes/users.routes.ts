import { Router } from "express";
import { createNewUser, deleteUserConstroller, listUsersController, updateUserController } from "../controllers/user.controllers";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { userSchemaRequest, userSchemaUpdateRequest } from "../schemas/users.schemas";
import { verifyEmailMiddleware } from "../middlewares/verifyEmail.middleware";
import { verifyIsAdminMiddleware } from "../middlewares/verifyIsAdmin.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { verifyIfUserDeleteMiddleware } from "../middlewares/verifyIfUserDelete.middleware";
import { verifyIdMiddleware } from "../middlewares/verifyId.middleware";

const userRouter: Router = Router()

userRouter.post("", verifyDataMiddleware(userSchemaRequest), verifyEmailMiddleware, createNewUser)
userRouter.get("", verifyTokenMiddleware, verifyIsAdminMiddleware, listUsersController)
userRouter.patch("/:id",verifyDataMiddleware(userSchemaUpdateRequest),verifyTokenMiddleware,verifyIdMiddleware, verifyIsAdminMiddleware, updateUserController)
userRouter.delete("/:id",verifyTokenMiddleware, verifyIdMiddleware, verifyIsAdminMiddleware,  verifyIfUserDeleteMiddleware,  deleteUserConstroller)

export { userRouter }