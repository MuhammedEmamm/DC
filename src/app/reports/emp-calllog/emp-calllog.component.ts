import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-calllog',
  providers: [ReportsService],
  templateUrl: './emp-calllog.component.html',
  styleUrls: ['./emp-calllog.component.css']
})
export class EmpCalllogComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router, private Route: ActivatedRoute) {
    this.Data = [{

      "UserID": '',
      "DebtorID": '',
      "DebtorName": '',
      "StaffName": '',
      "CompanyName": '',
      "Date": '',
      "Time": ''
    }];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {

    "UserID": any,
    "DebtorID": any,
    "DebtorName": any,
    "StaffName": any,
    "CompanyName": any,
    "Date": any,
    "Time": any
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
  ngOnInit() {
    return this.reportsService
      .employeeCalllog(this.Route.snapshot.paramMap.get('id'))
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['Client']
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))

  }

}
