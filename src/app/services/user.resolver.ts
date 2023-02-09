import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomResponse } from '../interfaces/response';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<CustomResponse> {

  constructor(private userService: UserService){}

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<CustomResponse> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}
