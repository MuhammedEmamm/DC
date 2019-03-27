import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performancr-report-details',
  providers: [ReportsService],

  templateUrl: './performancr-report-details.component.html',
  styleUrls: ['./performancr-report-details.component.css']
})
export class PerformancrReportDetailsComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router, private Route: ActivatedRoute) {
    this.Data = [{

      "DebtorCallsCount": '',
      "DebtorBatchPaid": '',
      "DebtorDebt": '',
      "DebtorName": ''
    }];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {
    "DebtorCallsCount": any,
    "DebtorBatchPaid": any,
    "DebtorDebt": any,
    "DebtorName": any
  }[];
  allDebtors: { "Name": any }[];
  allComps: { "CompanyName": any }[];
  allEmps: { "Name": any }[];
  date1: any;
  date2: any;
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
  PR(d1, d2) {

    return this.reportsService
      .performanceReportDetails({ "UserID": this.Route.snapshot.paramMap.get('id'), "DateFrom": new Date(d1).getFullYear() + '-' + (new Date(d1).getMonth() + 1) + '-' + new Date(d1).getDate(), "DateTo": new Date(d2).getFullYear() + '-' + (new Date(d2).getMonth() + 1) + '-' + new Date(d2).getDate() })
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
      .performanceReportDetails({ "UserID": this.Route.snapshot.paramMap.get('id') })
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['PerformanceReport'] ;
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))

  }

}
