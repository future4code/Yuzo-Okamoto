import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";
import { UserDatabase } from "../../src/data/UserDatabase";
import { IdGenerator } from "../../src/services/idGenerator";
import { HashGenerator } from "../../src/services/hashGenerator";
import { TokenGenerator } from "../../src/services/tokenGenerator";

describe("Testing method getUserById from UserBusiness", () => {
  test("Must return an error if user is not registered in database", async () => {
    expect.assertions(2);

    const userDatabase = {
      getUserById: jest.fn(async () => undefined),
    } as any;
    const idGenerator = {} as any;
    const hashGenerator = {} as any;
    const tokenGenerator = {} as any;

    const userBusiness = new UserBusiness(
      userDatabase,
      idGenerator,
      hashGenerator,
      tokenGenerator
    );

    try {
      const id = "user-id";
      await userBusiness.getProfile(id);
    } catch (error) {
      expect(error.errorCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  test("Must return profile if request is succesful", async () => {
    expect.assertions(3);

    const userDatabase = {
      getUserById: jest.fn(() => {
        return new User(
          "user-id",
          "John Doe",
          "johndoe@doe.com",
          "hashedpass",
          stringToUserRole("ADMIN")
        );
      }),
    } as any;

    const idGenerator = {} as any;
    const hashGenerator = {} as any;
    const tokenGenerator = {} as any;

    const userBusiness = new UserBusiness(
      userDatabase,
      idGenerator,
      hashGenerator,
      tokenGenerator
    );

    try {
      const id = "user-id";
      const user = new User(
        "user-id",
        "John Doe",
        "johndoe@doe.com",
        "hashedpass",
        stringToUserRole("ADMIN")
      );

      await userBusiness.getProfile(id);
      expect(userBusiness.getProfile).toBeCalledWith("user-id");
      expect(userDatabase.getUserById).toBeInstanceOf(User);
      expect(userDatabase.getUserById).toEqual(user);
    } catch (error) {}
  });
});
