import { createUser } from "@/controller/user"
import express from "express"
const userRouter=express.Router()

userRouter.post('/user',createUser)

export default userRouter