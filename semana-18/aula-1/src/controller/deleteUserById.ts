import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export async function deleteUserById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const token = req.headers.authorization;
    const id = req.params.id;

    const userBusiness = new UserBusiness();
    await userBusiness.deleteUserById(token, id);

    res.status(200).send({ message: `User deleted successfully` });
  } catch (error) {
    res
      .status(400)
      .send({ message: error.message, sqlMessage: error.sqlMessage });
  }
}
