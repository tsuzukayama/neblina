import * as Global from '../../../global';

import { Component, OnInit } from '@angular/core';

// Models
import { Amount } from '../../../shared/models/amount';

// Services
import { TransactionService } from '../../../shared/services/transaction.service';

@Component({
  selector: 'account-actions',
  templateUrl: './account-actions.component.html',
  styleUrls: ['./account-actions.component.scss']
})
export class AccountActionsComponent implements OnInit {

  type = 'n';
  op: Amount = new Amount();
  alerts: any = [];

  moneyMask = Global.moneyMask;

  constructor(
    private transactionService: TransactionService
  ) {
    this.op.amount = 0;
    this.op.amountMask = '';
  }

  ngOnInit() {
  }

  changeType(t) {
    this.type = t;
  }

  deposit() {
    this.op.amount = +this.op.amountMask.replace(/\D+/g, '');
    if (this.op.amount > 0)
      this.transactionService.deposit(this.op)
        .subscribe(
        data => this.alerts.push(Global.alertSucess),
        err => console.log('Error on Deposit: ' + err));
    else this.alerts.push(Global.alertInvalid);
  }

  withdrawal() {
    this.op.amount = +this.op.amountMask.replace(/\D+/g, '');
    if (this.op.amount > 0)
      this.transactionService.withdrawal(this.op)
        .subscribe(
        data => this.alerts.push(Global.alertSucess),
        err => {
          this.alerts.push(Global.alertInvalid);
          console.log('Error on Withdrawal: ' + err);
        });
    else this.alerts.push(Global.alertInvalid);
  }
}
