import * as Global from '../global';
import { Component, OnInit } from '@angular/core';

// Models
import { Statement } from '../shared/models/statement';

// Services
import { StatementService } from '../shared/services/statement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statement: Statement;

  constructor(
    private statementService: StatementService
  ) { }

  ngOnInit() {
    this.getStatement();
  }

  getStatement() {
    this.statementService.getStatement()
      .subscribe(
      data => {
        this.statement = data;
        console.log(data);
      });
  }

  getClass(status) {
    if (status === 'Successful' || status === 'Authorized')
      return 'badge-success';
    else if (status === 'Canceled' || status === 'Aborted' || status === 'Denied' || status === 'Failed')
      return 'badge-danger';
    else return 'badge-primary';
  }

}
