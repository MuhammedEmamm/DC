import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-neglectedaccount',
  providers: [ReportsService],
  templateUrl: './neglectedaccount.component.html',
  styleUrls: ['./neglectedaccount.component.css']
})
export class NeglectedaccountComponent implements OnInit {

  constructor(private Cookie: CookieService, private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{

      "DebtorName": "",
      "CompanyName": "",
      "EmployeeName": "",
      "DebtorIdentityNunmber": "",
      "EmployeeID": ""
    }];
    this.DataToCsv = [];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {

    "DebtorName": any,
    "CompanyName": any,
    "EmployeeName": any
    "DebtorIdentityNunmber": any,
    "EmployeeID": any
  }[];
  DataToCsv: {

    "DebtorName": any,
    "DebtorIdentityNunmber": any,
    "CompanyName": any,
    "EmployeeName": any
    "EmployeeID": any
  }[];

  Days: any;
  allDebtors: { "Name": any }[];
  allComps: { "CompanyName": any }[];
  allEmps: { "Name": any }[];
  RoleID = this.Cookie.get('RID');
  DebName: any;
  CompanyName: any;
  EmpName: any;
  ExportoCsv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'تقرير الحسابات المهملة',
      useBom: true,
      noDownload: false,
      headers: ["إسم المدين", "رقم هوية المدين","إسم الدائن", "اسم الموظف", "رقم الموظف"],
      nullToEmptyString: true,
    };
    for (var i = 0; i < this.Data.length; i++) {
      this.DataToCsv.push({
        "DebtorName": this.Data[i].DebtorName,
        "DebtorIdentityNunmber": this.Data[i].DebtorIdentityNunmber,
        "CompanyName": this.Data[i].CompanyName,
        "EmployeeName": this.Data[i].EmployeeName,
        "EmployeeID": this.Data[i].EmployeeID
      })
    }
    new Angular5Csv(this.DataToCsv,  'تقرير الحسابات المهملة', options);

  }
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
  Click() {
    return this.reportsService
      .Neglected()
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['AccountNeglected']
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))

  }
  ClickAdd(ID) {
    return this.reportsService
      .AddNeglected({ "UserID": this.Cookie.get('UID'), "NeglectedNumber": ID })
      .then((res) => {
        if (res['isSuccess'] == true) {
          window.location.reload();
        }
      })
      .catch(res => console.log(res))

  }

  ngOnInit() {
    this.Click();
  }

}
