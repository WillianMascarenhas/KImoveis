import { z } from "zod";
import { schedulesSchema, schedulesSchemaRequest } from "../schemas/schedule.schemas";

type TShcedule = z.infer<typeof schedulesSchema>

type TShceduleRequest = z.infer<typeof schedulesSchemaRequest>

export { TShcedule, TShceduleRequest }