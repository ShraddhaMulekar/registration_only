import express from "express"
import registerContainer from "../container/user.container.js"

const userRouter = express.Router()

userRouter.get("/", registerContainer)

export default userRouter