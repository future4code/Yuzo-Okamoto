import * as jwt from 'jsonwebtoken';

export class Authenticator {
  public generateToken(
    input: AuthenticationData,
    expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN as string
  ): string {
    const token = jwt.sign(
      { id: input.id, role: input.role },
      process.env.JWT_KEY as string
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  role?: string;
}
