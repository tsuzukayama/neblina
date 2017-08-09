import { Customer } from './customer';
import { Transaction } from './transaction';

export class Account {
    accountId : number;
    total: number;
    enabled: Boolean;

    customerId: number;
    customer: Customer;

    transactions: Transaction[];
}