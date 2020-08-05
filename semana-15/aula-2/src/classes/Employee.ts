import * as moment from 'moment';

import User from './User';

class Employee extends User {
  public static BENEFITS_VALUE = 400;

  constructor(
    _id: string,
    _email: string,
    _name: string,
    _password: string,
    protected _admissionDate: moment.Moment,
    protected _baseSalary: number
  ) {
    super(_id, _name, _email, _password);
  }

  get admissionDate(): moment.Moment {
    return this._admissionDate;
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  get totalSalary(): number {
    return this._baseSalary + Employee.BENEFITS_VALUE;
  }
}

export default Employee;
