import express from "express"
import registerContainer from "../container/user.registred.js"
import logInContainer from "../container/user.login.js"

const userRouter = express.Router()

userRouter.post("/register", registerContainer)
userRouter.post("/login", logInContainer)

export default userRouter