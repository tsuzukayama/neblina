import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  @Input() name: String;
  @Input() balance: number;

  constructor() { }

  ngOnInit() {
  }

}
