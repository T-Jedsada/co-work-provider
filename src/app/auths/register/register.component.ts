import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any = {};

  constructor(private usersService: UsersService, private router: Router) {
      this.onSignUp();
  }

  ngOnInit() {
      this.usersService.get_users().map((response: Response) => response).subscribe(users => {
          console.log(users);
          this.users = users;
      });
  }

  onSignUp() {
        // console.log(this.users.json());
  }
}
