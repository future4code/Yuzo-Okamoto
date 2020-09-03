import { USER_ROLE } from "./User";

export interface signupInputDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLE;
}
