import { Request, Response } from 'express';
import { connection } from '../index';
import * as utils from '../utils';

async function createUser(req: Request, res: Response): Promise<any> {
  try {
    const { username, nickname, email } = req.body;

    if (!username || !nickname || !email) {
      res.status(400).send(`Invalid params.`);
      return;
    }

    const id = utils.generateUserId();

    await connection.raw(`
      INSERT INTO Users
      VALUES (
        "${id}",
        "${username}",
        "${nickname}",
        "${email}"
      );
    `);

    res.status(200).send(`User ${username} created sucessfully.`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export default createUser;
