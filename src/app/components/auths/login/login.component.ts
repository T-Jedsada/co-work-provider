import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
      console.log(form.value);
      this.users.email = form.value.email;
      this.users.password = form.value.password;
      this.auth.login(this.users).subscribe(
        success => {
          console.log(success);
          this.users = success;
          console.log(this.users.success);
          if (this.users.success === false) {
            console.log(this.users.data.error);
            this.error = this.users.data.error;
          } else {
            localStorage.setItem('email', this.users.email);
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          console.log(error);
          this.error = this.users.data.error;
        }
      );
  }
}

export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
