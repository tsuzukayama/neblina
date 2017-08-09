import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StatementService {
    private url = 'http://localhost:5000/statement/';

    constructor(private http: Http) { }

    getStatement() {
        return this.http.get(this.url)
            .map(res => res.json());
    }    
}
