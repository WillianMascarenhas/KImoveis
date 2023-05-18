import { z } from "zod"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const loginSchemaResponse = z.object({
    token: z.string()
})

export { loginSchema, loginSchemaResponse }