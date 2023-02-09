import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomResponse } from '../../interfaces/response';
import { User } from '../../interfaces/user';

enum Mode {
  Edit = 'edit',
  Locked = 'locked'
}

type BtnText = 'edit' | 'save changes';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  btnText: BtnText = 'edit';
  mode: Mode = Mode.Locked;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.userService.getUser(params.get('uuid')!).subscribe((user: User) => this.user = user);
    // })
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedUser'].results[0]));
  }

  onChangeMode(): void {
    this.mode=  this.mode === 'edit' ? Mode.Locked : Mode.Edit;
    this.btnText = this.mode === 'edit' ? 'save changes': 'edit';
  }
}
