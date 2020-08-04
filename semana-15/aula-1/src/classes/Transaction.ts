class Transaction {
  date: string;
  value: number;
  description: string;

  constructor(transaction: Transaction) {
    const { date, value, description } = transaction;
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

export default Transaction;
