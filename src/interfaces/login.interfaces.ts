import { z } from "zod"
import { loginSchema, loginSchemaResponse } from "../schemas/login.schemas"

type TLogin = z.infer<typeof loginSchema>

type TLoginReponse = z.infer<typeof loginSchemaResponse>

export { TLogin, TLoginReponse }