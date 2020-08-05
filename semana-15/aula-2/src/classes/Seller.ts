import Employee from './Employee';

class Seller extends Employee {
  private _salesQuantity: number = 0;
  public static SELLING_COMMISION: number = 5;

  get totalSalary(): number {
    return super.totalSalary + this._salesQuantity * Seller.SELLING_COMMISION;
  }

  get salesQuantity(): number {
    return this._salesQuantity;
  }

  set salesQuantity(quantity: number) {
    this._salesQuantity += quantity;
  }
}

export default Seller;
