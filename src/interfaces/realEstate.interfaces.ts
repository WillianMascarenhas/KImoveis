import { z } from "zod"
import { realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse } from "../schemas/realEstate.schemas"

type TRealEstateInterface = z.infer<typeof realEstateSchema>
type TRealEstateInterfaceRequest = z.infer<typeof realEstateSchemaRequest>
type TRealEstateInterfaceResponse = z.infer<typeof realEstateSchemaResponse>


export { TRealEstateInterface, TRealEstateInterfaceRequest, TRealEstateInterfaceResponse }
