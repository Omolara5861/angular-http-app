import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';
import { Response } from '../../interfaces/response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

usersArray: Response;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers(5).subscribe(
      users => {
        this.usersArray = users;
      },
      err => console.log(err),
      () => console.log(`Complete Fetching users from Randomusers.me API`)
    )
  }
}
