import { Request, Response } from 'express';

import Authenticator from '../services/Authenticator';
import Generator from '../services/Generator';
import UserDatabase from '../services/UserDatabase';

export default async function signup(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const generator = new Generator();
    const userDatabase = new UserDatabase();

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ message: `'email' and 'password' are required` });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).send({ message: `Invalid email` });
    }

    if (!/^.{6,}$/.test(password)) {
      res
        .status(400)
        .send({ message: `Invalid password, must contain at least 6 letters` });
    }

    const id = generator.uuid();

    userDatabase.createUser(id, email, password);

    const token = authenticator.generateToken({ id });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
