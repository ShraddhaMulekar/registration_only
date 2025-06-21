import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./Routes/user.route.js"
dotenv.config()
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})