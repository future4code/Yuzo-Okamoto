import { Router } from "express";
import UserController from "../controller/UserController";

const userRouter = Router();

userRouter.post("/users/signup", new UserController().signup);

export default userRouter;
