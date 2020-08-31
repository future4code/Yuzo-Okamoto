import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export async function signIn(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    const userBusiness = new UserBusiness();
    const token = await userBusiness.signIn(email, password);

    res.status(200).send({ message: `User signed in successfully`, token });
  } catch (error) {
    res
      .status(400)
      .send({ message: error.message, sqlMessage: error.sqlMessage });
  }
}
