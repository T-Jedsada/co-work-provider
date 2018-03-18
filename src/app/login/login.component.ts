import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../AuthService ';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user: User = new User();
  constructor(private auth: AuthService) { }

  onLogin() {
    this.auth.login(this.user).then((user) => {
      console.log(user.json());
    }).catch((err) => {
      console.log(err);
    });
    console.log(this.user);
  }
}