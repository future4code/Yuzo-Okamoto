import knex from "knex";
import Knex from "knex";

abstract class BaseData {
  private static connection: Knex | null = null;

  public getConnection(): Knex {
    if (!BaseData.connection) {
      BaseData.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT) || 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      });
    }
    return BaseData.connection;
  }
  public static async destroyConnection(): Promise<void> {
    if (BaseData.connection) {
      await BaseData.connection.destroy();
      BaseData.connection = null;
    }
  }
}

export default BaseData;
