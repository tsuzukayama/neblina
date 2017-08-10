import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  AlertModule,
  BsDropdownModule
} from 'ngx-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { AccountInfoComponent } from './home/account/account-info/account-info.component';
import { ListTransactionsComponent } from './transactions/list-transactions/list-transactions.component';
import { TransferFormComponent } from './transactions/transfer-form/transfer-form.component';


import { StatementService } from './shared/services/statement.service';
import { TransfersService } from './transactions/shared/services/transfers.service';
import { TransactionService } from './shared/services/transaction.service';

import { routing } from './app.routing';
import { AccountActionsComponent } from './home/account/account-actions/account-actions.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    AccountInfoComponent,
    ListTransactionsComponent,
    TransferFormComponent,
    AccountActionsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TextMaskModule
  ],
  providers: [
    StatementService,
    TransfersService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
