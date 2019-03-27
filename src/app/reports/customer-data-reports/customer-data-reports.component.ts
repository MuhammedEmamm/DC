import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-customer-data-reports',
  providers: [ReportsService],

  templateUrl: './customer-data-reports.component.html',
  styleUrls: ['./customer-data-reports.component.css']
})
export class CustomerDataReportsComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{
      "UserID": '',
      "Name": '',
      "Phone": '',
      "Job": '',
      "IdentityNumber": '',
      "IdentityType": '',
      "UserName": '',
      "ProductCode": "",
      "ProductName": ""
    }];
    this.DataToCSV=[] ;

    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {
    "Name": any,
    "Phone": any,
    "Job": any,
    "IdentityType": any,
    "IdentityNumber": any,
    "ProductCode": any,
    "ProductName": any,
    "UserName": any,
    "UserID": any
  }[];
  DataToCSV: {
    "Name": any,
    "Phone": any,
    "Job": any,
    "IdentityType": any,
    "IdentityNumber": any,
    "ProductCode": any,
    "ProductName": any,
    "UserName": any,
    "UserID": any
  }[] ; 
  allDebtors: { "Name": any }[];
  allComps: { "CompanyName": any }[];
  allEmps: { "Name": any }[];

  DebName: any;
  CompanyName: any;
  EmpName: any;

  Alldebs() {
    return this.reportsService
      .AllDebtors()
      .then((data) => {
        this.allDebtors = data['Debtors'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  AllCOmps() {
    return this.reportsService
      .allCreditorsComapnies()
      .then((data) => {
        this.allComps = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  Allemps() {
    return this.reportsService
      .allEmployee()
      .then((data) => {
        this.allEmps = data['users'];
        console.log(this.allEmps);
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  ExportoCsv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'تقرير بيانات العملاء',
      useBom: true,
      noDownload: false,
      headers: ["الاسم", "رقم الهاتف", "الوظيفه", "نوع الهوية", "رقم الهوية", "كود المنتج", "اسم المنتج", "الموظف", "رقم الموظف"],
      nullToEmptyString: true,
    };
    for (var i = 0; this.Data !== undefined && i < this.Data.length; i++) {
      this.DataToCSV.push({
        "Name": this.Data[i].Name,
        "Phone": this.Data[i].Phone,
        "Job": this.Data[i].Job,
        "IdentityType": this.Data[i].IdentityType,
        "IdentityNumber": this.Data[i].IdentityNumber,
        "ProductCode":this.Data[i].ProductCode,
        "ProductName":this.Data[i].ProductName,
        "UserName": this.Data[i].UserName,
        "UserID": this.Data[i].UserID
      }); 
    }
    console.log(this.DataToCSV);
    new Angular5Csv(this.DataToCSV, 'تقرير بيانات العملاء', options);

  }

  ngOnInit() {
    this.Alldebs();
    this.Allemps();
    this.AllCOmps();
    return this.reportsService
      .customerdatareport()
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['Debtors'] ; 
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))

  }

}
