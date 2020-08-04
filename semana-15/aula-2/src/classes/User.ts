class User {
  constructor(
    readonly _id: string,
    readonly _email: string,
    readonly _name: string,
    private _password: string
  ) {}

  get password() {
    return this._password;
  }

  public introduceYourself(): void {
    console.log(`Olá, bom dia! Meu nome é ${this._name}`);
  }
}

export default User;
