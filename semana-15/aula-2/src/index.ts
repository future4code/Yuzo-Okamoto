import * as moment from 'moment';

import { User, Customer, Employee, Seller } from './classes';

const user = new User('1', 'email', 'Yuzo', 'pass');
const customer = new Customer('2', 'email2', 'Sant', 'pass1', '123');
const employee = new Employee('3', 'email3', 'Okam', '321', moment(), 100);
const seller = new Seller('4', 'email4', 'Shu', '333', moment(), 500);
