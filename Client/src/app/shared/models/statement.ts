import { Transaction } from './transaction';

export class Statement {
  accountId: number;
  customerName: String;
  balance: number;

  transactions: Transaction[];
}
