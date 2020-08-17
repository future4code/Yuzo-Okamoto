import { Request, Response } from 'express';

import Authenticator from '../services/Authenticator';
import UserDatabase from '../services/UserDatabase';

export default async function profile(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const userDatabase = new UserDatabase();

    const token = req.headers.authorization as string;

    if (!token) {
      res.status(400).send({ message: `Invalid session` });
    }

    const { id } = authenticator.getData(token);

    const { email } = await userDatabase.getUserById(id);

    res.status(200).send({ id, email });
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
