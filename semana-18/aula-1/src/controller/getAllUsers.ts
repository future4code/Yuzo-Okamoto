import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization;

    const userBusiness = new UserBusiness();
    const result = await userBusiness.getAllUsers(token);

    res.status(200).send(result);
  } catch (error) {
    res
      .status(400)
      .send({ message: error.message, sqlMessage: error.sqlMessage });
  }
}
