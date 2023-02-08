import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(size = 10): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?results=${size}`);
  }

  getUser(uuid: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}uuid=${uuid}`);
  }
}
