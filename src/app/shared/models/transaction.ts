import { Account } from './account';
import { Type } from './type';
import { Status } from './status';

export class Transaction {
    transactionId: number;
    date: String;
    description: String;
    credit: number;
    debit: number;
    transactionType: Type;
    transactionStatus: Status;    
}
