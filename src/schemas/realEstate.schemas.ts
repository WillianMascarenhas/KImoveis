import { z } from "zod"
import { addressSchemaRequest, addressSchema } from "./address.schema"
import { categorySchema } from "./category.schema"

const realEstateSchema = z.object({
    id: z.number(),
    value: z.number().lte(9999999999.99).default(0).or(z.string()),
    size: z.number().int().positive(),
    categoryId: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string()
})

const realEstateSchemaRequest = realEstateSchema.omit({id: true, createdAt: true, updatedAt: true, address: true}).extend({address: z.optional(addressSchemaRequest)})
const realEstateSchemaRequest2 = realEstateSchema.omit({id: true, createdAt: true, updatedAt: true, address: true}).extend({address: addressSchemaRequest})
const realEstateSchemaResponse = realEstateSchema.extend({address: addressSchema , category: categorySchema}).omit({categoryId: true})
const realEstatesSchemaResponse = z.array(realEstateSchemaResponse)


export { realEstateSchema, realEstateSchemaRequest, realEstateSchemaResponse, realEstatesSchemaResponse,realEstateSchemaRequest2 }