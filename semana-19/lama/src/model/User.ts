class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLE
  ) {}

  getId(): string { return this.id; } // prettier-ignore
  getName(): string { return this.name; } // prettier-ignore
  getEmail(): string { return this.email; } // prettier-ignore
  getPassword(): string { return this.password; } // prettier-ignore
  getRole(): string { return this.role; } // prettier-ignore

  setId(newId: string) { this.id = newId; } // prettier-ignore
  setName(newName: string) { this.name = newName; } // prettier-ignore
  setEmail(newEmail: string) { this.email = newEmail; } // prettier-ignore
  setPassword(newPassword: string) { this.password = newPassword; } // prettier-ignore
  setRole(newRole: USER_ROLE) { this.role = newRole; } // prettier-ignore
}

export enum USER_ROLE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface AuthenticationData {
  id: string;
  role: USER_ROLE;
}

export default User;
