import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  image: any = {};
  user: any = {};
  email: any = {};
  test: any = {};

  constructor(private auth: AuthService, private router: Router, private usersService: UsersService) {
  }

  ngOnInit() {
    /*this.usersService.get_users().map((response: Response) => response).subscribe(users => {
        console.log(users);
        this.user = users;
    });*/
  }

  onSignUp(form: NgForm) {
    this.user.id = '2333';
    this.user.email = form.value.email;
    this.user.name = form.value.name;
    this.user.password = form.value.password;
    console.log(form.value);
    // ---------------------------------------------------------------------
    this.auth.uploadImage(form.value.image).subscribe(
      res => {
        this.image = res;
        this.user.image = this.image.data.message;
        // -----------------------------------------------------------------
        this.auth.register(this.user).subscribe(
          user => {
            console.log(user);
            this.email = user;
            this.test.id = this.email.data._id;
            this.test.email = this.email.data.email;
            console.log(this.test);
            // -------------------------------------------------------------
            this.auth.sendEmail(this.test).subscribe(
              success => {
                console.log(success);
                this.email = success;
                if (this.email.success === true) {
                  console.log('sign up successfully.');
                  this.router.navigate(['/sign-in']);
                }
              },
              err => {
                console.log('Error: can not send email');
              }
            );
            // -------------------------------------------------------------
          },
          err => {
            console.log('Error: can not save sign up');
          }
        );
        // -----------------------------------------------------------------
        },
        err => {
          console.log('Error: can not save file image');
        }
      );
    // ---------------------------------------------------------------------
  }
}
