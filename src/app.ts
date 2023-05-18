import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRouter } from "./routes/users.routes"
import { loginRouter } from "./routes/login.routes"
import { handleErros } from "./erros"
import { realEstateRouter } from "./routes/realEstate.routes"
import { categoriesRouter } from "./routes/categories.routes"
import { schedulesRouter } from "./routes/schedules.routes"


const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/realEstate", realEstateRouter)
app.use("/categories", categoriesRouter)
app.use("/schedules", schedulesRouter)

app.use(handleErros)


export default app