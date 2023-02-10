import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of, EMPTY } from 'rxjs';
import { CustomResponse } from '../interfaces/response';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<CustomResponse> {

  constructor(private userService: UserService){}

  /** Resolves the user details data returned */
  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<CustomResponse> {
    return this.userService.getUser(route.paramMap.get('uuid')!)
      .pipe(catchError(err => {
        alert(`Something went wrong while fetching the user details
        Err Msg: ${err.message}`);
        return EMPTY;
      }));
  }
}
