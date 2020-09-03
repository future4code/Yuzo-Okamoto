import UserData from "../data/UserData";
import InvalidParameterError from "../errors/InvalidParameterError";
import IdGenerator from "../services/IdGenerator";
import HashManager from "../services/HashManager";
import TokenManager from "../services/TokenManager";
import { USER_ROLE } from "../model/User";

class UserBusiness {
  constructor(
    private userData: UserData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private tokenManager: TokenManager
  ) {}

  public async signup(input: any): Promise<string> {
    const { name, email, password, role } = input;

    if (!name || !email || !password) {
      throw new InvalidParameterError(
        "Missing input property: name, email and/or password"
      );
    }

    if (typeof name !== "string") {
      throw new InvalidParameterError(
        "Invalid input property: name, email and password must be typeof string"
      );
    }

    if (role !== USER_ROLE.ADMIN && role !== USER_ROLE.NORMAL) {
      input.role = USER_ROLE.NORMAL;
    }

    input.id = this.idGenerator.generate();
    input.password = await this.hashManager.hash(password);
    await this.userData.signup(input);

    return this.tokenManager.generate({ id: input.id, role: input.role });
  }
}

export default UserBusiness;
