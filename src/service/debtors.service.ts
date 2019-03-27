import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { endpoint } from '../config/api.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DebtorsService {
    constructor(private http: HttpClient, private Cookie: CookieService) { }
    httpHeaders = new HttpHeaders({
        'SecurityToken': this.Cookie.get('Token')
    });
    options = { headers: this.httpHeaders };

    addDebtor(debtorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addDebtor'), debtorData, this.options)
                .toPromise()
                .then(data => {
                    console.log('addDebtor', data);
                    resolve(data);
                }, reject);
        });
    }

    addCall(callData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addCall'), callData, this.options)
                .toPromise()
                .then(data => {
                    console.log('addCall', data);
                    resolve(data);
                }, reject);
        });
    }

    editDebtor(debtorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('editDebtor'), debtorData, this.options)
                .toPromise()
                .then(data => {
                    console.log('editDebtor', data);
                    resolve(data);
                }, reject);
        });
    }

    deleteDebtor(debtorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('deleteDebtor'), debtorData, this.options)
                .toPromise()
                .then(data => {
                    console.log('deleteDebtor', data);
                    resolve(data);
                }, reject);
        });
    }

    AllDebtors() {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allDebtors'), this.options)
                .toPromise()
                .then(data => {
                    console.log('AllDebtors', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }


    debtorsPayment(debtorID) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('debtorsPayment'), debtorID, this.options)
                .toPromise()
                .then(data => {
                    console.log('debtorsPayment', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    addPayment(debtorData) {
        console.log(debtorData);
        console.log('debtorData', debtorData, this.options);
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addPayment'), debtorData)
                .toPromise()
                .then(data => {
                    console.log('addPayment', data);
                    resolve(data);
                }, reject);
        });
    }

    editPayment(debtorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('editPayment'), debtorData, this.options)
                .toPromise()
                .then(data => {
                    console.log('editPayment', data);
                    resolve(data);
                }, reject);
        });
    }
    allCreditorsComapnies() {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allCreditorsComapnies'), this.options)
                .toPromise()
                .then(data => {
                    console.log('allCreditorsComapnies', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    deletePayment(debtorData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('deletePayment'), debtorData, this.options)
                .toPromise()
                .then(data => {
                    console.log('deletePayment', data);
                    resolve(data);
                }, reject);
        });
    }

    debtorProfile(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('debtorProfile') + ID, this.options)
                .toPromise()
                .then(data => {
                    console.log('debtorProfile', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    debtorsCallLog(DebtID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint(`deptorCallLog`) + DebtID, this.options)
                .toPromise()
                .then(data => {
                    console.log('deptorCallLog', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    debtorsAccountingReport(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('debtorsAccountingReport') + ID, this.options)
                .toPromise()
                .then(data => {
                    console.log('debtorsAccountingReport', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    debtorsDeterminationRate() {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('debtorsDeterminationRate'), this.options)
                .toPromise()
                .then(data => {
                    console.log('debtorsDeterminationRate', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    companyCollection(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('companyCollection') + ID, this.options)
                .toPromise()
                .then(data => {
                    console.log('companyCollection', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    debtorsCollection(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('debtorsCollection') + ID, this.options)
                .toPromise()
                .then(data => {
                    console.log('debtorsCollection', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    AllContracts(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allContracts') + ID, this.options)
                .toPromise()
                .then(data => {
                    // console.log('allContracts', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    AllProds(ID) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allProds') + ID, this.options)
                .toPromise()
                .then(data => {
                    console.log('allProds', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }
    allEmployee() {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('allEmployee'), this.options)
                .toPromise()
                .then(data => {
                    resolve(data['Response']);
                }, reject);
        });

    }


}
