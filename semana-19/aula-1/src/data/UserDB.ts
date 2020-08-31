import { BaseDB } from './BaseDB';

export class UserDB extends BaseDB {
  private static TABLE_NAME = "jest_users";

  public async createUser(user: User): Promise<void> {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword()
      })
      .into(UserDB.TABLE_NAME);
  }

  public async getUserById(id: string): Promise<User | null> {
    const result = await this.getConnection()
      .from(UserDB.TABLE_NAME)
      .where({ id });
    return result[0];
  }

  public async deleteUserById(id: string): Promise<void> {
    await this.getConnection()
      .del()
      .from(UserDB.TABLE_NAME)
      .where({ id });
  }

  public async deleteAllUsers(): Promise<void> {
    await this.getConnection()
      .del()
      .from(UserDB.TABLE_NAME);
  }
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) { }

  getId() { return this.id }
  getName() { return this.name }
  getEmail() { return this.email }
  getPassword() { return this.password }
}