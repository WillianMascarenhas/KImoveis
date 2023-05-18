import { z } from "zod"
import { categorySchema, categorySchemaResquest } from "../schemas/category.schema"

type TCategory = z.infer<typeof categorySchema>
type TCategoryRequest = z.infer<typeof categorySchemaResquest>

export { TCategory, TCategoryRequest }