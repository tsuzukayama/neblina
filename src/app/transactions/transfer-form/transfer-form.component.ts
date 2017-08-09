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
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {

  private transfer: Transfer = new Transfer();

  private bank: string;
  private bankForm: FormGroup;

  public alerts: any = [];

  private types = [
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
      desc: 'Transferência interna'
    },
  ];

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
    if (this.bankForm.valid)
      this.transfersService.sendTransfer(this.bank, this.transfer)
        .subscribe(
        data => this.alerts.push(Global.alertSucess));
    else this.alerts.push(Global.alertInvalid);
  }
}
