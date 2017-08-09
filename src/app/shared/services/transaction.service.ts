import * as Global from '../../global';

import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class TransactionService {
    private url = Global.BASE_API_URL;

    constructor(private http: Http) { }

    deposit(amount) {                
        return this.http.post(
            this.url + 'deposits',
            amount);
    }

    withdrawal(amount) {                
        return this.http.post(
            this.url + 'withdrawals',
            amount);
    }
}
