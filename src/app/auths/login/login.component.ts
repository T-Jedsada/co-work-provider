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
  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit () {
  }

  onSignIn(form: NgForm) {
      console.log(form.value);
      this.users.email = form.value.email;
      this.users.password = form.value.password;

      this.auth.login(this.users).subscribe(
        success => {
          console.log(success);
          this.users = success;
          if (this.users.success === true) {
            this.router.navigate(['/home']);
          }
        },
        error => {
          console.log('k');
        }
      );
  }
}
