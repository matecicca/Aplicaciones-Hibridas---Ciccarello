import express from 'express';
import { listUsers, newUser } from '../controllers/UserController.js'

const userRouter = express.Router();

userRouter.get('/', listUsers)
userRouter.post('/', newUser)

export default userRouter;