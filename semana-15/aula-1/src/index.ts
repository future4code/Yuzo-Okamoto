import Bank from './classes/Bank';
import UserAccount from './classes/userAccount';

const bank = new Bank();
const userAccount = new UserAccount(bank.getAccountByCpfAndName('032', 'Yuzo'));

console.log(userAccount.balance);

console.log(userAccount.addBalance(15));

console.log(userAccount.balance);
