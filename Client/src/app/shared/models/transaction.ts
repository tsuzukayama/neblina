import { Account } from './account';

export class Transaction {
    transactionId: number;
    destinationBankId: number;
    amount: number;

    transactionType: Type;
    transactionStatus: Status;

    accountId: number;
    account: Account;
}