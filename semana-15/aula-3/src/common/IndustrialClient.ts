import { Industry } from './Industry';
import { IClient } from './IClient';

export class IndustrialClient extends Industry implements IClient {
  constructor(
    private industryRegistry: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  getIndustryRegistry = (): string => this.industryRegistry;

  calculateBill = (): number =>
    this.consumedEnergy * 0.4 + this.machinesQuantity * 100;
}
