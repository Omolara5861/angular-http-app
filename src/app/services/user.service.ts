import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { CustomResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /** The ApI endpoint used for this application
   * @readonly keyword makes @baseUrl Immutable
  */
  readonly baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  /** This method returns a specific number of users from @baseUrl
   * @param size specifies the number of users to return
    */
  getUsers(size = 10): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.baseUrl}?results=${size}`)
    .pipe(
      /** RXJS function / method that calls @processResponse with the response returned by the parent function @getUsers */
      map(this.processResponse)
    );
  }

  /**
   * This method returns a specific user from @baseUrl
   * @param uuid identifies / specifies the user to retrieve from the API
   * @return returns the user that matches the query passed to @baseUrl
   */
  getUser(uuid: string): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.baseUrl}uuid=${uuid}`)
    .pipe(
      /** RXJS function / method that calls @processResponse and passes the response returned by @getUser function by default */
      map(this.processResponse)
    );
  }

/** This method Processes the data (users / user) that @baseUrl returns. @info is copied from the one the API returned so the data remains the same but @result property is mapped and casted to @User shape. So it doesn't return all the properties the API sends but the ones defined in the user shape/interface
 * @param response represents the API response
 * @private makes this method only accessible in this class
*/
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
        coordinates: {latitude: +user.location.coordinates.latitude, longitude: +user.location.coordinates.longitude}
      }))
    }
  }
}
