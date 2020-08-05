import { IClient } from './IClient';
import { Commerce } from './Commerce';

export class CommercialClient extends Commerce implements IClient {
  constructor(
    private cnpj: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  getCnpj = (): string => this.cnpj;

  calculateBill = (): number => this.consumedEnergy * 0.53;
}
