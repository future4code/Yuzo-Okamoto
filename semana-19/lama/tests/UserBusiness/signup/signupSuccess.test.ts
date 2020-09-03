import UserBusiness from "../../src/business/UserBusiness";

describe("Testing method signup from UserBusiness", () => {
  let userData = {
    signup: jest.fn(),
  };
  let idGenerator = {
    generate: jest.fn(() => "id"),
  };
  let hashManager = {
    hash: jest.fn(() => "hash"),
  };
  let tokenManager = {
    generate: jest.fn(() => "token"),
  };

  test("Must return a token when user signs up successfully", async () => {
    expect.assertions(10);

    const userBusiness = new UserBusiness(
      userData as any,
      idGenerator as any,
      hashManager as any,
      tokenManager as any
    );

    const input = {
      name: "John Doe",
      email: "johndoe@john.com",
      password: "abc123",
      role: "ADMIN",
    };

    try {
      await userBusiness.signup(input);
      expect(userData.signup).toBeCalledTimes(1);
      expect(userData.signup).toBeCalledWith(input);

      expect(hashManager.hash).toHaveBeenCalledTimes(1);
      expect(hashManager.hash).toBeCalledWith("abc123");
      expect(hashManager.hash).toHaveReturnedWith("hash");

      expect(idGenerator.generate).toHaveBeenCalledTimes(1);
      expect(idGenerator.generate).toHaveReturnedWith("id");

      expect(tokenManager.generate).toHaveReturnedTimes(1);
      expect(tokenManager.generate).toHaveBeenCalledWith({id: "id", role: "ADMIN"}) // prettier-ignore
      expect(tokenManager.generate).toHaveReturnedWith("token");
    } catch (error) {
      console.log(error.message);
    }
  });
});
