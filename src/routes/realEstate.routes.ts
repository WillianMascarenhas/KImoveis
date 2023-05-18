import { Router } from "express";
import { createRealEstate, listRealEstate } from "../controllers/realEstate.controllers";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { realEstateSchemaRequest, realEstateSchemaRequest2 } from "../schemas/realEstate.schemas";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { verifyAddressMiddleware } from "../middlewares/verifyAddress.middleware";
import { verifyIsAdminMiddleware } from "../middlewares/verifyIsAdmin.middleware";

const realEstateRouter: Router = Router()

realEstateRouter.post("",  verifyTokenMiddleware, verifyIsAdminMiddleware,verifyDataMiddleware(realEstateSchemaRequest2), verifyAddressMiddleware, createRealEstate)
realEstateRouter.get("", listRealEstate )

export { realEstateRouter }