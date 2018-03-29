import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  checkLogin: any;
  constructor() { }
  ngOnInit() {
    if (localStorage.getItem('email') === null) {
      this.checkLogin = 'Not login';
    }
  }
}
