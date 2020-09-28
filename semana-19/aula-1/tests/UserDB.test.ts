import dotenv from 'dotenv';
import { UserDB } from "../src/data/UserDB"
import { User } from "../src/data/UserDB";

dotenv.config();

describe("Testing class UserDB", () => {
  const userDB = new UserDB();

  beforeAll(async () => {
    await userDB.deleteAllUsers();
  });

  test("Must create user successfully", async () => {
    try {
      const user = new User("001", "John Doe", "johndoe@gmail.com", "johndoe123");
      await userDB.createUser(user);
      const queryResult = await userDB.getUserById("001");
      expect(queryResult).toEqual(user);
    } catch (error) {
      console.log(error);
    } finally {
      userDB.destroyConnection();
    }
  });

  test("Must catch error on duplicate entries when creating a new user", async () => {
    try {
      expect.assertions(1);

      const user = new User("001", "John Doe", "johndoe@gmail.com", "johndoe123");
      await userDB.createUser(user);
      await userDB.createUser(user);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    } finally {
      userDB.destroyConnection();
    }
  })
})