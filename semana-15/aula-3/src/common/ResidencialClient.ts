import { IClient } from './IClient';
import { Residence } from './Residence';

export class ResidencialClient extends Residence implements IClient {
  constructor(
    private cpf: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  getCpf = (): string => this.cpf;

  calculateBill = (): number => this.consumedEnergy * 0.75;
}
