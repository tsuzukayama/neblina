import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TransactionsService {
    private url = 'http://localhost:5000/transactions/';

    constructor(private http: Http) { }

    getTransactions(){
        return this.http.get(this.url)
            .map(res => res.json());
    }

    getTransaction(id){
        return this.http.get(this.url + id)
            .map(res => res.json());
    }
}