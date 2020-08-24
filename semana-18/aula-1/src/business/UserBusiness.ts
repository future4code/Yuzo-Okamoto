import { IdGenerator } from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { UserDatabase } from '../data/UserDatabase';
import { HashManager } from '../services/HashManager';
import * as uuid from 'uuid';

export class UserBusiness {
  private userDatabase = new UserDatabase();

  public async signUp(
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<string> {
    if (!name || !email || !password) {
      throw new Error(`Name, Email and Password are required`);
    }

    const hashManager = new HashManager();
    const hashedPassword = await hashManager.hash(password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    await this.userDatabase.signUp(id, name, email, hashedPassword, role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id, role });

    return token;
  }

  public async signIn(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new Error(`Email and Password are required`);
    }

    const user = await this.userDatabase.getUserByEmail(email);

    if (!user) {
      throw new Error(`Email and/or Password are invalid`);
    }

    const hashManager = new HashManager();
    const isAuth = await hashManager.compare(password, user.password);

    if (!isAuth) {
      throw new Error(`Email and/or Password are invalid`);
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.id, role: user.role });

    return token;
  }

  public async getAllUsers(token: string | undefined): Promise<any> {
    if (!token) {
      throw new Error(`Not authorized`);
    }

    const authenticator = new Authenticator();
    const authData = authenticator.getData(token);

    if (authData.role !== 'ADMIN') {
      throw new Error(`Not authorized`);
    }

    const user = await this.userDatabase.getUserById(authData.id);

    if (!user) {
      throw new Error(`Not authorized`);
    }

    return this.userDatabase.getAllUsers();
  }

  public async deleteUserById(
    token: string | undefined,
    id: string
  ): Promise<any> {
    if (!token) {
      throw new Error(`Not authorized`);
    }

    const authenticator = new Authenticator();
    const authData = authenticator.getData(token);

    if (authData.role !== 'ADMIN') {
      throw new Error(`Not authorized`);
    }

    const user = await this.userDatabase.getUserById(authData.id);

    if (!user) {
      throw new Error(`Not authorized`);
    }

    if (!id) {
      throw new Error(`Param ID is required`);
    }

    const isValidId = uuid.validate(id);

    if (!isValidId) {
      throw new Error(`Invalid ID`);
    }

    await this.userDatabase.deleteUserById(id);
  }
}
