import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { endpoint } from '../config/api.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient, private Cookie: CookieService) { }
    httpHeaders = new HttpHeaders({
        'SecurityToken': this.Cookie.get('Token')
    });
    options = { headers: this.httpHeaders };

    addEmployee(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addEmployee'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('addEmployee', data);
                    resolve(data);
                }, reject);
        });
    }
    DetEmployee(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('detailsEmployee'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('detailsEmployee', data);
                    resolve(data['Response']);
                }, reject);
        });
    }

    editEmployee(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('editEmployee'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('editEmployee', data);
                    resolve(data);
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

    employeeCollection(Data) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('userActivity'), Data, this.options)
                .toPromise()
                .then(data => {
                    if (data['isSuccess']) {
                        console.log('userActivity', data['Response']);
                    }

                    resolve(data['Response']);
                }, reject);
        });
    }

    updateEmployee(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('editEmployee'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('updateEmplyee', data['Response']);
                    resolve(data['Response']);
                }, reject);
        });
    }

    deleteEmployee(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('deleteEmployee'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('deleteEmplyee', data);
                    this.allEmployee();
                    resolve(data);
                }, reject);
        });
    }

    addFollowUp(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('addFollowUp'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('addFollowUp', data);
                    resolve(data);
                }, reject);
        });
    }

    editFollowUp(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('editFollowUp'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('editFollowUp', data);
                    resolve(data);
                }, reject);
        });
    }

    deleteFollowUp(employeeData) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('deleteFollowup'), employeeData, this.options)
                .toPromise()
                .then(data => {
                    console.log('deleteFollowup', data);
                    resolve(data);
                }, reject);
        });
    }

    userFollowup(ID) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('userFollowup'), { 'EmployeeID': ID }, this.options)
                .toPromise()
                .then(data => {
                    resolve(data['Response']);
                }, reject);
        });
    }

    performanceReport(Data) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('performanceReport2'), Data, this.options)
                .toPromise()
                .then(data => {
                    if (data['isSuccess']) {
                        console.log('performanceReport2', data);
                    }
                    resolve(data['Response']);
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

    AssignDeb(Data) {
        return new Promise((resolve, reject) => {
            return this.http.post(endpoint('assignDebt'), Data, this.options)
                .toPromise()
                .then(data => {
                    console.log('assignDebt', data['isSuccess']);
                    resolve(data['Response']);
                }, reject);
        });

    }
    Notif(Data) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('Notifications') + Data, this.options)
                .toPromise()
                .then(data => {
                    console.log('Notifications', data['isSuccess']);
                    resolve(data['Response']);
                }, reject);
        });

    }
    NotifRead(Data) {
        return new Promise((resolve, reject) => {
            return this.http.get(endpoint('NotificationsRead') + Data, this.options)
                .toPromise()
                .then(data => {
                    console.log('NotificationsRead', data['isSuccess']);
                    resolve(data['Response']);
                }, reject);
        });

    }

    ChatMsgs(from, To) {
        return new Promise((resolve, reject) => {
            return this.http.get(`http://yakensolution.cloudapp.net/DebtCollection/api/Users/AllChatMessages?from=${from}&to=${To}`, this.options)
                .toPromise()
                .then(data => {
                    console.log('Chat Messages', data['isSuccess']);
                    resolve(data['Response']);
                }, reject);
        });
    }


    resetpassword(Data) {
        return this.http.post(endpoint('ResetPassword'), Data);
    }


}
