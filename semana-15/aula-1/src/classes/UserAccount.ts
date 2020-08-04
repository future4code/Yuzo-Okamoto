import Transaction from './Transaction';

interface User {
  name: string;
  age: number;
  cpf: string;
  balance: number;
  transactions: Transaction[];
}

class UserAccount {
  name: string;
  age: number;
  cpf: string;
  balance: number;
  transactions: Transaction[];

  constructor(userAccount: User) {
    const { name, age, cpf, balance, transactions } = userAccount;

    this.name = name;
    this.age = age;
    this.cpf = cpf;
    this.balance = balance;
    this.transactions = transactions;
  }

  getBalance(): number {
    return this.balance;
  }

  addBalance(value: number): void {
    this.balance += value;
  }
}

export default UserAccount;
