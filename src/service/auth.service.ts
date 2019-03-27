import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { endpoint } from '../config/api.config';
import { AppStateService } from './app-state.service';
import { AppStateKey } from '../interface/app-state.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthenticationService {
  constructor(private appState: AppStateService, private http: HttpClient, private Cookie: CookieService) { }
  Val: Boolean;
  isAuthenticated() {
    return this.Val;
  }
  login(credentials) {
    return new Promise((resolve, reject) => {
      return this.http.post(endpoint('login'), credentials)
        .toPromise()
        .then((data) => {
          console.log('login data', data['Response']);
          this.Val = data['isSuccess'];
          console.log(this.Val);
          if (data['isSuccess']) {
            this.Cookie.set('Token', data['Response'].SecurityToken);
            this.Cookie.set('UID', data['Response'].ID);
            this.Cookie.set('RID', data['Response'].RoleID);
            this.Cookie.set('Name', data['Response'].Name);
            this.Cookie.set('FT', data['Response'].FirstTime);
            window.location.reload();
          }
          resolve(data);
        }, reject);
    });
  }
  resetpassword(Data) {
    return this.http.post(endpoint('ResetPassword'), Data);
  }



}
