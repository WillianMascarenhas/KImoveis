import { Request, Response } from "express";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";
import { TRealEstateInterfaceRequest } from "../interfaces/realEstate.interfaces";
import { listRealStatesServices } from "../services/realEstate/listRealStates.service";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";

const createRealEstate = async(req: Request, res: Response): Promise<Response> =>{
    const data: TRealEstateInterfaceRequest = req.body

    const dataValid = realEstateSchemaRequest.parse(data)


    const RealEstate = await createRealEstateService(data)

    return res.status(201).json(RealEstate)

}
const listRealEstate = async (req: Request, res: Response): Promise<Response> => {

    const list = await listRealStatesServices()
    return res.json(list)
}

export { createRealEstate, listRealEstate }