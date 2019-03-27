import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { endpoint } from '../config/api.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class KpiService {

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  httpHeaders = new HttpHeaders({
    'SecurityToken': this.Cookie.get('Token')
  });
  options = { headers: this.httpHeaders };
  ListAllCollection() {
    return this.http.post(endpoint('ListTargetCollection') + `?Date=${(new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}`, {}, this.options);
  }
  ListAllCalls() {
    return this.http.post(endpoint('ListTargetCalls') + `?Date=${(new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}`, {}, this.options);
  }
  SetTargetCall(Data) {
    return this.http.post(endpoint('SetTargetCalls'), Data, this.options);
  }
  SetTargetCollection(Data) {
    return this.http.post(endpoint('SetTargetCollection'), Data, this.options);
  }
  AllEmps() {
    return this.http.get(endpoint('allEmployee'), this.options) ; 
  }



}
