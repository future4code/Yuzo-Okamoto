import UserAccount from './userAccount';
import JSONFileManager from './JSONFileManager';
import Transaction from './Transaction';

const fileName = './src/data/bank.json';

class Bank {
  accounts: UserAccount[];
  fileManager: JSONFileManager;

  constructor() {
    this.fileManager = new JSONFileManager(fileName);
    this.accounts = this.fileManager.getObjectFromFile(fileName);
  }

  createAccount(
    cpf: string,
    name: string,
    age: number,
    balance: number = 0,
    transactions: Transaction[] = []
  ): void {
    const newAccount = new UserAccount({
      name,
      cpf,
      age,
      balance,
      transactions,
    });

    const updatedAccounts = [...this.accounts];

    updatedAccounts.push(newAccount);

    this.fileManager.writeObjectToFile(fileName, updatedAccounts);
  }

  getAllAccounts(): UserAccount[] {
    return this.accounts;
  }

  getAccountByCpfAndName(cpf: string, name: string): UserAccount | undefined {
    let account: UserAccount | undefined;

    this.accounts.some((acc) => {
      if (acc.name === name && acc.cpf === cpf) {
        account = acc;
      }
    });

    return account;
  }
}

export default Bank;
