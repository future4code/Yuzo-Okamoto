import { Request, Response } from 'express';

import Authenticator from '../services/Authenticator';
import UserDatabase from '../data/UserDatabase';

export default async function deleteUser(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const userDatabase = new UserDatabase();

    const token = req.headers.authorization as string;
    const { id } = req.params;

    if (!token) {
      res.status(400).send({ message: `Invalid session` });
    }

    const { role } = authenticator.getData(token);

    if (role !== 'ADMIN') {
      throw new Error(`Unauthorized`);
    }

    await userDatabase.deleteUserById(id);

    res.status(200).send({ message: `User deleted successfully` });
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
