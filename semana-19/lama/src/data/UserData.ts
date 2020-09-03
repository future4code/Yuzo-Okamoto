import BaseData from "./BaseData";
import { signupInputDTO } from "../model/DTO";

class UserData extends BaseData {
  private static TABLE_NAME = "Lama_Users";

  public async signup(input: signupInputDTO): Promise<void> {
    await this.getConnection().insert(input).into(UserData.TABLE_NAME);
  }
}

export default UserData;
