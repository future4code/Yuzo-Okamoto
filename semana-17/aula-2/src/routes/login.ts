import { Request, Response } from 'express';

import Authenticator from '../services/Authenticator';
import UserDatabase from '../data/UserDatabase';
import HashManager from '../services/HashManager';

export default async function login(req: Request, res: Response): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const userDatabase = new UserDatabase();

    const { email, password, role } = req.body;

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

    const userData = await userDatabase.getUserByEmail(email);

    if (userData) {
      const check = await new HashManager().compare(
        password,
        userData.password
      );
      if (check) {
        const token = authenticator.generateToken({ id: userData.id, role });
        res.status(200).send({ token });
      } else {
        throw new Error(`'email' and/or 'password' incorrect`);
      }
    } else {
      throw new Error(`'email' and/or 'password' incorrect`);
    }
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
