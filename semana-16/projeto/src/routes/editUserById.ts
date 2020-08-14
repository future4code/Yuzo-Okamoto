import { Request, Response } from 'express';
import { connection } from '../index';

import * as utils from '../utils';

async function editUserById(req: Request, res: Response): Promise<any> {
  try {
    let userId = req.query.id;
    let { username, nickname, email } = req.body;

    userId = utils.removeAllWhiteSpace(userId);
    username = utils.removeCornersWhiteSpace(username);
    nickname = utils.removeAllWhiteSpace(nickname);
    email = utils.removeAllWhiteSpace(email);

    utils.validateParams([userId, username, nickname, email], res);

    await connection.raw(``);

    res.status(200).send(`User updated succesfully.`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export default editUserById;
