import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'User_Arq';

  public async signUp(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    try {
      await this.getConnection()
        .insert({ id, name, email, password, role })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage);
    } finally {
      await this.destroyConnection();
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select()
        .from(UserDatabase.TABLE_NAME)
        .where({ email })
        .first();

      return result;
    } catch (error) {
      throw new Error(error.sqlMessage);
    } finally {
      await this.destroyConnection();
    }
  }

  public async getUserById(id: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select()
        .from(UserDatabase.TABLE_NAME)
        .where({ id })
        .first();
      return result;
    } catch (error) {
      throw new Error(error.sqlMessage);
    } finally {
      await this.destroyConnection();
    }
  }

  public async getAllUsers(): Promise<any> {
    try {
      const result = await this.getConnection().from(UserDatabase.TABLE_NAME);

      return result;
    } catch (error) {
      throw new Error(error.sqlMessage);
    } finally {
      await this.destroyConnection();
    }
  }

  public async deleteUserById(id: string): Promise<any> {
    try {
      const user = await this.getUserById(id);

      if (!user) {
        throw new Error(`User to delete not found`);
      }

      await this.getConnection()
        .del()
        .from(UserDatabase.TABLE_NAME)
        .where({ id });
    } catch (error) {
      throw new Error(error.sqlMessage);
    } finally {
      await this.destroyConnection();
    }
  }
}
