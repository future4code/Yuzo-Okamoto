import { Request, Response } from "express";

import UserBusiness from "../business/UserBusiness";
import BaseData from "../data/BaseData";
import UserData from "../data/UserData";
import IdGenerator from "../services/IdGenerator";
import HashManager from "../services/HashManager";
import TokenManager from "../services/TokenManager";

class UserController {
  private static userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new TokenManager()
  );

  public async signup(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;
      const input = { name, email, password, role };
      const token = await UserController.userBusiness.signup(input);
      res.status(200).send({ message: `Signup success`, token });
    } catch (error) {
      res.status(error.code || 400).send({ message: error.message });
    } finally {
      await BaseData.destroyConnection();
    }
  }
}

export default UserController;
