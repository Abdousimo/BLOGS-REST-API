import express from 'express'
import { getAllUsers, signup, login} from '../controllers/user-controller';

const userRouter = express.Router();

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/",getAllUsers)


export default userRouter