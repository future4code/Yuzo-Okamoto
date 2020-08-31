import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export async function signUp(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password, role = 'NORMAL' } = req.body;

    const userBusiness = new UserBusiness();
    const token = await userBusiness.signUp(name, email, password, role);

    res.status(200).send({ message: `User signed up successfully`, token });
  } catch (error) {
    res
      .status(400)
      .send({ message: error.message, sqlMessage: error.sqlMessage });
  }
}
