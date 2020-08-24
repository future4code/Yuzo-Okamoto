import { Request, Response } from 'express';
import { connection } from '../index';

import * as utils from '../utils';

async function getUserById(req: Request, res: Response): Promise<any> {
  try {
    let userId = req.query.id;

    userId = utils.removeAllWhiteSpace(userId);

    if (!userId || userId.length === 0) {
      res.status(400).send(`Invalid params.`);
      return;
    }

    const result = await connection.raw(`
      SELECT id, nickname FROM Users
      WHERE id = "${userId}";
    `);

    if (result[0].length === 0) {
      res
        .status(200)
        .send(`Error: user with an id of ${userId} does not exist.`);
      return;
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export default getUserById;
