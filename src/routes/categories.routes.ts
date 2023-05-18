import { Router } from "express";
import { categoryController, listAllCategoriesRealEstate, listCategoriesRealEstate } from "../controllers/categories.controllers";
import { verifyIsAdminMiddleware } from "../middlewares/verifyIsAdmin.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { categorySchemaResquest } from "../schemas/category.schema";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { verifyCategoryName } from "../middlewares/verifyCategoryName.middleware";

const categoriesRouter: Router = Router()

categoriesRouter.post("",verifyDataMiddleware(categorySchemaResquest), verifyTokenMiddleware, verifyIsAdminMiddleware, verifyCategoryName ,categoryController)
categoriesRouter.get("", listAllCategoriesRealEstate)
categoriesRouter.get("/:id/realEstate", listCategoriesRealEstate)

export { categoriesRouter }