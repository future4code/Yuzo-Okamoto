import * as jwt from 'jsonwebtoken';

enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

interface AuthenticationData {
  id: string;
  role: USER_ROLES;
}

export default class Authenticator {
  private static EXPIRES_IN = '3h';

  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: Authenticator.EXPIRES_IN,
    });

    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;

    return payload as AuthenticationData;
  }
}
