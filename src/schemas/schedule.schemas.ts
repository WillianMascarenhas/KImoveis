import { z } from "zod";
import { userSchemaResponse } from "./users.schemas";
import { realEstateSchema } from "./realEstate.schemas";

const schedulesSchema = z.object({
    id: z.number().int(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int(),
    userId: z.number().int()
})

const schedulesSchemaRequest = schedulesSchema.omit({id: true, userId: true})

const schedulesSchemaResponse = schedulesSchema.extend({realEstate: realEstateSchema, user: userSchemaResponse}).omit({realEstateId: true, userId: true})

export { schedulesSchema, schedulesSchemaRequest, schedulesSchemaResponse }
