import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { endpoint } from '../config/api.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ReportsService {

  constructor(private http: HttpClient, private Cookie: CookieService) { }
  httpHeaders = new HttpHeaders({
    'SecurityToken': this.Cookie.get('Token')
  });
  options = { headers: this.httpHeaders };

  recordRep() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('debtorsAllCall'), this.options)
        .toPromise()
        .then(data => {
          console.log('debtorsAllCall', data);
          resolve(data);
        }, reject);
    });
  }
  recordRepDetails(Data) {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('deptorCallLog') + Data, this.options)
        .toPromise()
        .then(data => {
          console.log('deptorCallLog', data);
          resolve(data);
        }, reject);
    });
  }
  customerpaymentsreport() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('debtorsCollection2'), this.options)
        .toPromise()
        .then(data => {
          console.log('debtorsCollection2', data);
          resolve(data);
        }, reject);
    });
  }
  customerdatareport() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('allDebtors'), this.options)
        .toPromise()
        .then(data => {
          console.log('allDebtors', data);
          resolve(data);
        }, reject);
    });
  }
  determinationofcollectionrate() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('debtorsCollection'), this.options)
        .toPromise()
        .then(data => {
          console.log('debtorsCollection', data);
          resolve(data);
        }, reject);
    });
  }
  employeereport() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('empCount'), this.options)
        .toPromise()
        .then(data => {
          console.log('empCount', data);
          resolve(data);
        }, reject);
    });
  }
  employeeCalllog(ID) {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('custCalls') + ID, this.options)
        .toPromise()
        .then(data => {
          console.log('custCalls', data);
          resolve(data);
        }, reject);
    });
  }
  performanceReport(Data) {
    return new Promise((resolve, reject) => {
      return this.http.post(endpoint('performanceReport'), Data, this.options)
        .toPromise()
        .then(data => {
          console.log('performanceReport', data);
          resolve(data);
        }, reject);
    });
  }
  performanceReportDetails(ID) {
    return new Promise((resolve, reject) => {
      return this.http.post(endpoint('performanceReportDetails'), ID, this.options)
        .toPromise()
        .then(data => {
          console.log('performanceReportDetails', data);
          resolve(data);
        }, reject);
    });
  }
  Allpayments() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('payments'), this.options)
        .toPromise()
        .then(data => {
          console.log('payments', data);
          resolve(data);
        }, reject);
    });
  }
  Neglected() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('Neglectedaccount'), this.options)
        .toPromise()
        .then(data => {
          console.log('Neglectedaccount', data);
          resolve(data);
        }, reject);
    });
  }

  AddNeglected(ID) {
    return new Promise((resolve, reject) => {
      return this.http.post(endpoint('AddNeglectedaccount'), ID, this.options)
        .toPromise()
        .then(data => {
          console.log('AddNeglectedaccount', data);
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
  allEmployee() {
    return new Promise((resolve, reject) => {
      return this.http.get(endpoint('allEmployee'), this.options)
        .toPromise()
        .then(data => {
          resolve(data['Response']);
        }, reject);
    });

  }
  TargetCollection() {
    return new Promise((resolve, reject) => {
      return this.http.post(endpoint('TargetCollection') + `?Date=${(new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}`, {}, this.options)
        .toPromise()
        .then(data => {
          resolve(data['Response']);
        }, reject);
    });

  }

  TargetCalls() {
    return new Promise((resolve, reject) => {
      return this.http.post(endpoint('TargetCalls') + `?Date=${(new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}`, {}, this.options)
        .toPromise()
        .then(data => {
          resolve(data['Response']);
        }, reject);
    });

  }

  CollectionReport() {
    return this.http.get(endpoint('CollectionReport') + `${(new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()}`, this.options);
  }
  CollectionReportCompany(ID) {
    return this.http.get(endpoint('CollectionReportCompany') + ID, this.options);
  }
  CollectionReportCompanines(Date) {
    return this.http.get(endpoint('CollectionReportCompanies') + Date, this.options);
  }
  EmployeesCollection(Date) {
    return this.http.get(endpoint('EmpolyeesReport') + Date, this.options);
  }
  EmployeesCalls(Date) {
    return this.http.get(endpoint('CallsReport') + Date, this.options);
  }
  DebtsReport() {
    return this.http.get(endpoint('DebtsReport'), this.options)
  }
  DebtsReportCompanies(ID) {
    return this.http.get(endpoint('DebtsReportCompanies') + ID, this.options);
  }
  CompanyDebtReport(ID) {
    return this.http.get(endpoint('CompanyDebtReport') + ID, this.options);
  }

  CompanyDebtReportAll() {
    return this.http.get(endpoint('CompanyDebtReportAll'), this.options);
  }
  CallStatusReport(date) {
    return this.http.get(endpoint('CallStatusReport')+date, this.options);
  }
  CallStatusReportCompany(date, ID) {
    return this.http.get(endpoint('CallStatusReportCompany')+`?Date=${date}&companyID=${ID}`, this.options);
  }
}
