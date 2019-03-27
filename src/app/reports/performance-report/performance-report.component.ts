import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-performance-report',
  providers: [ReportsService],

  templateUrl: './performance-report.component.html',
  styleUrls: ['./performance-report.component.css']
})
export class PerformanceReportComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{
      "EmployeeName": '',
      "EmployeeIdentityNumber": '',
      "UserID": '',
      "CallsCount": '',
      "BatchesCount": '',
      "DebtorsCount": '',
      "BatchesPayment": '',
      "TotalDebt": ''
    }];
    this.DataToCsv = [];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  date1: any;
  date2: any;
  DataToCsv: {
    "EmployeeID": any,

    "EmployeeName": any,
    "EmployeeIdentityNumber": any,
    "CallsCount": any,
    "BatchesCount": any,
    "DebtorsCount": any,
    "BatchesPayment": any,
    "TotalDebt": any,
    "Rate": any
  }[];
  Data: {
    "EmployeeName": any,
    "EmployeeIdentityNumber": any,
    "UserID": any,
    "CallsCount": any,
    "BatchesCount": any,
    "DebtorsCount": any,
    "BatchesPayment": any,
    "TotalDebt": any
  }[];
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
      title: 'تقرير الاداء',
      useBom: true,
      noDownload: false,
      headers: ["رقم الموظف", "إسم الموظف", "رقم هوية الموظف", "اجمالي الديون", "عدد المكالمات", "عدد المدينين", "عدد الدفعات", "المدفوعات", "النسبة"],
      nullToEmptyString: true,
    };
    for (var i = 0; i < this.Data.length; i++) {
      this.DataToCsv.push({
        "EmployeeID": this.Data[i].UserID,
        "EmployeeName": this.Data[i].EmployeeName,
        "EmployeeIdentityNumber": this.Data[i].EmployeeIdentityNumber,
        "TotalDebt": this.Data[i].TotalDebt,
        "CallsCount": this.Data[i].CallsCount,
        "DebtorsCount": this.Data[i].DebtorsCount,
        "BatchesCount": this.Data[i].BatchesCount,
        "BatchesPayment": this.Data[i].BatchesPayment,
        "Rate": ((this.Data[i].BatchesPayment / this.Data[i].TotalDebt) * 100)

      })
    }
    new Angular5Csv(this.DataToCsv, 'تقرير الاداء', options);

  }
  PR(d1, d2) {

    return this.reportsService
      .performanceReport({ "DateFrom": new Date(d1).getFullYear() + '-' + (new Date(d1).getMonth() + 1) + '-' + new Date(d1).getDate(), "DateTo": new Date(d2).getFullYear() + '-' + (new Date(d2).getMonth() + 1) + '-' + new Date(d2).getDate() })
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['PerformanceReport'] ; 
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))
  }

  ngOnInit() {
    return this.reportsService
      .performanceReport({})
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['PerformanceReport'] ; 
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))

  }

}
