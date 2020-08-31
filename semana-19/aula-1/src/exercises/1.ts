export function performPurchase(user: User, purchaseValue: number): User | undefined {
  if (user.getBalance() >= purchaseValue) {
    user.subtractFromBalance(purchaseValue);
    return user;
  }
  return undefined;
}

export class User {
  constructor(
    private name: string,
    private balance: number
  ) { }

  getName(): string { return this.name }
  getBalance(): number { return this.balance }

  setName(newName: string): void { this.name = newName }
  setBalance(newBalance: number): void { this.balance = newBalance }

  addToBalance(value: number): void {
    const balance = this.getBalance();
    this.setBalance(balance + value);
  }

  subtractFromBalance(value: number): void | undefined {
    const balance = this.getBalance();
    this.setBalance(balance - value);
  }
}