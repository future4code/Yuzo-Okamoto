import User from './User';

class Customer extends User {
  constructor(
    _id: string,
    _email: string,
    _name: string,
    _password: string,
    private _creditCard: string
  ) {
    super(_id, _email, _name, _password);
  }

  get creditCard() {
    return this._creditCard;
  }
}

export default Customer;
