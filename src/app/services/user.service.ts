import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(size = 10): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}?results=${size}`)
    .pipe(
      map(response => this.processResponse(response))
    );
  }

  getUser(uuid: number): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}uuid=${uuid}`)
    .pipe(
      map(response => this.processResponse(response))
    );
  }


  private processResponse(response: Response): Response {
    return {
      info: {...response.info},
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        email: user.email,
        dob: user.dob.date,
        age: user.dob.age,
        phone: user.phone,
        profileSrc: user.picture.medium,
        address: `${user.location.street.number}, ${user.location.street.name}, ${user.location.country}.`,
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude
      }))
    }
  }
}
