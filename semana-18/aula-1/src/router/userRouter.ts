import { Router } from 'express';
import { signUp } from '../controller/signUp';
import { signIn } from '../controller/signIn';
import { getAllUsers } from '../controller/getAllUsers';
import { deleteUserById } from '../controller/deleteUserById';

export const userRouter = Router();

userRouter.put('/signup', signUp);
userRouter.post('/signin', signIn);
userRouter.get('/all', getAllUsers);
userRouter.delete('/:id', deleteUserById);
