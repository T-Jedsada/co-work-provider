import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import {Response} from '@angular/http';
import {isSuccess} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any = {};
  state = '';
  error: any;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit () {
  }

  onSignIn(form: NgForm) {
      /*console.log(form.value);
      this.users.email = form.value.email;
      this.users.password = form.value.password;
      localStorage.setItem('email', this.users.email);
      this.auth.login(this.users).subscribe(
        success => {
          console.log(success);
          this.users = success;
          console.log(this.users.success);
          if (this.users.success === false) {
            console.log(this.users.data.error);
            this.error = this.users.data.error;
          } else {
            this.router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this.error = this.users.data.error;
        }
      );*/
  }
}
