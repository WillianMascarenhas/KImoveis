import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    
    console.log("Database connected")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })    
})()