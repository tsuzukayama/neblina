import * as Global from '../../../global';

import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Transfer } from '../models/transfer';

@Injectable()
export class TransfersService {
    private url = Global.BASE_API_URL + 'transfers/';

    constructor(private http: Http) { }

    sendTransfer(bank: string, transfer) {
        const param: URLSearchParams = new URLSearchParams();        
        param.set('bank', bank);
        return this.http.post(
            this.url + 'send',
            transfer,
            {search: param});
    }
}
