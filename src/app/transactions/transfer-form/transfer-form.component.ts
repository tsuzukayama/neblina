import * as Global from '../../global';

import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
// Models
import { Transfer } from '../shared/models/transfer';

// Services
import { TransfersService } from '../shared/services/transfers.service';

@Component({
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {

  transfer: Transfer = new Transfer();

  bank: string;
  bankForm: FormGroup;

  alerts: any = [];

  types = [
    {
      name: 'another',
      desc: 'DOC'
    },
    {
      name: 'another',
      desc: 'TED'
    },
    {
      name: 'same',
      desc: 'Internal transfer'
    },
  ];

  moneyMask = Global.moneyMask;

  constructor(
    private formBuilder: FormBuilder,
    private transfersService: TransfersService
  ) {
    this.bankForm = formBuilder.group({
      bank: ['', [Validators.required]],
      destinationBankId: ['', [Validators.required]],
      destinationAccountId: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  transferMoney() {
    console.log(this.bank);
    this.transfer.amount = +this.transfer.amountMask.replace(/\D+/g, '');
    if (this.bankForm.valid)
      this.transfersService.sendTransfer(this.bank, this.transfer)
        .subscribe(
        data => this.alerts.push(Global.alertSucess));
    else this.alerts.push(Global.alertInvalid);
  }
}
