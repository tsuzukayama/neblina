import * as Global from '../../../global';

import { Component, OnInit } from '@angular/core';

// Models
import { Amount } from '../../../shared/models/amount';

// Services
import { TransactionService } from '../../../shared/services/transaction.service';

@Component({
  selector: 'account-actions',
  templateUrl: './account-actions.component.html',
  styleUrls: ['./account-actions.component.css']
})
export class AccountActionsComponent implements OnInit {

  private type = 'n';
  private op: Amount = new Amount();

  public alerts: any = [];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
  }

  changeType(t) {
    this.type = t;
  }

  deposit() {
    if (this.op.amount > 0)
      this.transactionService.deposit(this.op)
        .subscribe(
        data => this.alerts.push(Global.alertSucess));
    else this.alerts.push(Global.alertInvalid);
  }

  withdrawal() {
    if (this.op.amount > 0)
      this.transactionService.withdrawal(this.op)
        .subscribe(
        data => this.alerts.push(Global.alertSucess));
    else this.alerts.push(Global.alertInvalid);
  }
}
