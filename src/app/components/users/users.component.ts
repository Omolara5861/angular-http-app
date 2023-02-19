import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';
import { CustomResponse } from '../../interfaces/response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

/** An array that stores the users returned by the API */
usersArray: CustomResponse;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    /**Call the getUsers method in the user service with 8 so the API would return 8 users.  If successful, the users fetched @users would be stored in the @userArray but if there is an error, it would be logged to the console*/
    this.userService.getUsers(8).subscribe(
      (users: CustomResponse) => {
        this.usersArray = users;
      },
      err => console.log(err),
      () => console.log(`Complete Fetching ${this.usersArray.results.length} users from Random Users Generator`)
    )
  }
}
