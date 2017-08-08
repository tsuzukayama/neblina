import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { 
  AlertModule,
  BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { AccountInfoComponent } from './home/account/account-info/account-info.component';

import { StatementService } from './shared/services/statement.service';

import { routing } from './app.routing';
import { ListTransactionsComponent } from './transactions/list-transactions/list-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,    
    AccountInfoComponent,    
    ListTransactionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    StatementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
