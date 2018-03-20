import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any = {};

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.get_users().map((response: Response) => response).subscribe(users => {
        if (this.users.success === false) {
            console.log('5555');
        } else {
          console.log(users);
          this.users = users;
        }
    });
  }

  onClickMe() {
  }
}
