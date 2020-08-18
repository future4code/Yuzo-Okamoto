import knex from 'knex';
import BaseDB from './BaseDatabase';

export default class UserDatabase extends BaseDB {
  private static TABLE_NAME = 'Users';

  public async createUser(
    id: string,
    email: string,
    password: string,
    role?: string
  ): Promise<void> {
    try {
      await this.connect()
        .insert({ id, email, password, role })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.connect()
        .select()
        .from(UserDatabase.TABLE_NAME)
        .where({
          email,
        });
      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getUserById(id: string): Promise<any> {
    try {
      const result = await this.connect().from(UserDatabase.TABLE_NAME).where({
        id,
      });
      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async deleteUserById(id: string): Promise<any> {
    try {
      await this.connect().from(UserDatabase.TABLE_NAME).delete().where({ id });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
