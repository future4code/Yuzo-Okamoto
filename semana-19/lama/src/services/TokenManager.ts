import jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/User";

class TokenManager {
  public generate(input: AuthenticationData): string {
    return jwt.sign(input, process.env.JWT_KEY as string);
  }

  public verify(token: string): string | AuthenticationData {
    return jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AuthenticationData;
  }
}

export default TokenManager;
