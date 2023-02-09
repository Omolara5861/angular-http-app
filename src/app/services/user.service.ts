import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { CustomResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(size = 10): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.baseUrl}?results=${size}`)
    .pipe(
      map(this.processResponse)
    );
  }

  getUser(uuid: string): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.baseUrl}?uuid=${uuid}`)
    .pipe(
      map(this.processResponse)
    );
  }


  private processResponse(response: CustomResponse): CustomResponse {
    return {
      info: {...response.info},
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        username: user.login.username,
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
