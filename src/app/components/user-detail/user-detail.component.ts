import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomResponse } from '../../interfaces/response';

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

  user: CustomResponse;
  btnText: BtnText = 'edit';
  mode: Mode = Mode.Locked;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userService.getUser(params.get('uuid')!).subscribe((user: CustomResponse) => this.user = user);
    })
  }

  onChangeMode(): void {
    this.mode=  this.mode === 'edit' ? Mode.Locked : Mode.Edit;
    this.btnText = this.mode === 'edit' ? 'save changes': 'edit';
  }
}
