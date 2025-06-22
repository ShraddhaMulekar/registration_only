import express from "express"
import registerContainer from "../container/user.registred.js"
import logInContainer from "../container/user.login.js"
import logOutContainer from "../container/user.logout.js"

const userRouter = express.Router()

userRouter.post("/register", registerContainer)
userRouter.post("/login", logInContainer)
userRouter.post("/logout", logOutContainer)

export default userRouter