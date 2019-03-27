import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';



@Component({
  selector: 'app-communication-r-r',
  providers: [ReportsService],
  templateUrl: './communication-r-r.component.html',
  styleUrls: ['./communication-r-r.component.css']
})
export class CommunicationRRComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{
      "ID": '',
      "DebtorName": '',
      "StaffName": '',
      "CompanyName": '',
      "Date": '',
      "Time": ''
    }];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  allDebtors: { "Name": any }[];
  allComps: { "CompanyName": any }[];
  allEmps: { "Name": any }[];
  date1: any;
  date2: any;

  DebName: any;
  CompanyName: any;
  EmpName: any;
  Data: {
    "ID": any,
    "DebtorName": any,
    "StaffName": any,
    "CompanyName": any,
    "Date": any,
    "Time": any
  }[];
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

  ngOnInit() {
    this.Alldebs();
    this.Allemps();
    this.AllCOmps();
    return this.reportsService
      .recordRep()
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['Debtors']
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))

  }
  ExportoCsv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'تقرير بسجل الاتصالات',
      useBom: true,
      noDownload: false,
      headers: ["إسم الدائن", "إسم المدين", "رقم هوية المدين", "إسم الموظف", "رقم الموظف", "التاريخ", "الوقت"],
      nullToEmptyString: true,
    };
    new Angular5Csv(this.Data, 'تقرير بسجل الاتصالات', options);

  }


}
