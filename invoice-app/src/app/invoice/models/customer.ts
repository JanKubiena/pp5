import { Invoice } from './invoice';

export class Customer {
  constructor() {}

  firmLabel: string = '';
  nip: number = 0;
  cityName: string = '';
  streetName: string = '';
  houseNumber: number = 0;
  apartmentNumber: number = 0;
  postalcode: string = '';
  comments: string = '';
  industry: string = '';
  isActive: boolean = true;

  getAddress(): any {
    return `${this.cityName} ${this.postalcode} ${this.streetName} ${this.houseNumber}`;
  }
  getCustomerInfo(): any {
    return `label: "${this.firmLabel}" nip: ${this.nip}`;
  }
}

class Supplier extends Customer {
  constructor(accountNumber: any) {
    super();
    accountNumber = accountNumber;
  }
  accountNumber: string = '';
  invoices: Invoice[] = [];
}
