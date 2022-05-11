import express from "express"
import loginUser from "../CONTROLLERS/loginUser"

const Router = express.Router

const loginUserRouter = Router()

loginUserRouter.post('/', loginUser)

export default loginUserRouter