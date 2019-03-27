import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-employee-report',
  providers: [ReportsService],

  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{
      "EmployeeName": '',
      "IdentityNumber": '',
      "UserID": '',
      "CustomerCount": ''

    }];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {
    "EmployeeName": any,
    "IdentityNumber": any,
    "UserID": any,
    "CustomerCount": any

  }[];
  name: any;
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
      title: 'تقرير الموظفين',
      useBom: true,
      noDownload: false,
      headers: ["اسم الموظف", "رقم هوية الموظف", "رقم الموظف", "عدد المدينين", "اجمالي الديون"],
      nullToEmptyString: true,
    };

    new Angular5Csv(this.Data, 'تقرير الموظفين', options);

  }


  ngOnInit() {
    return this.reportsService
      .employeereport()
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['EmployeeCutomerCount']
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))


  }

}
