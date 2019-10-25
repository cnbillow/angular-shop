import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../domain';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

constructor(
  private http:HttpClient
) { }

//获取个人信息
  getProfile() {
    return this.http.get<Profile>(`${environment.baseUrl}/profile`);
  }

  saveProfile(profile: Profile): Observable<Profile> {
    const headers = { 'Content-Type': 'application/json' };
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    return this.http.post<Profile>(`${environment.baseUrl}/profile`, profile, {
      headers
    });
  }
}
