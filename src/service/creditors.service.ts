import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { endpoint } from '../config/api.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CreditorsService {
    constructor(private http: HttpClient, private Cookie: CookieService) { }
    httpHeaders = new HttpHeaders({
        'SecurityToken': this.Cookie.get('Token')
    });
    options = { headers: this.httpHeaders };

    
    addCreditor(creditorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addCreditor'), creditorData , this.options)
                .toPromise()
                .then(data => {
                    console.log('addCreditor', data);
                    resolve(data);
                }, reject);
        });
    }

    editCreditor(creditorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('editCreditor'), creditorData , this.options)
                .toPromise()
                .then(data => {
                    console.log('editCreditor', data);
                    resolve(data);
                }, reject);
        });
    }

    deleteCreditor(creditorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('deleteCreditor'), creditorData , this.options)
                .toPromise()
                .then(data => {
                    console.log('deleteCreditor', data);
                    resolve(data);
                }, reject);
        });
    }

    allCreditorsComapnies() {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allCreditorsComapnies') , this.options)
                .toPromise()
                .then(data => {
                    console.log('allCreditorsComapnies', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    allCreditorsPayment() {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allCreditorsPayment') , this.options)
                .toPromise()
                .then(data => {
                    console.log('allCreditorsPayment', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    AddContract(Data) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addContract'), Data  , this.options)
                .toPromise()
                .then(data => {
                    console.log('addContract', data['isSuccess']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    AllContracts(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allContracts') + ID , this.options)
                .toPromise()
                .then(data => {
                    // console.log('allContracts', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    AllProds(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allProds') + ID , this.options)
                .toPromise()
                .then(data => {
                    console.log('allProds', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    AddProds(Data) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addProds'), Data , this.options)
                .toPromise()
                .then(data => {
                    console.log('addProds', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    DeleteProds(Data) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('deleteProds'), Data , this.options)
                .toPromise()
                .then(data => {
                    console.log('deleteProds', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }



}
