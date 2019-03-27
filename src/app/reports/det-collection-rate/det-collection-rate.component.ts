import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-det-collection-rate',
  providers: [ReportsService],

  templateUrl: './det-collection-rate.component.html',
  styleUrls: ['./det-collection-rate.component.css']
})
export class DetCollectionRateComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{
      "EmployeeName": '',
      "EmployeeIdentityNumber": '',
      "DebtorIdentityNumber":'',
      "ContructName": '',
      "DebtName": '',
      "CompanyName": '',
      "Debts": '',
      "Total": '',
      "PaymentDue": '',
      "Payment": '',
      "CollectionRate": '',
      "DelayPayment": '',
      "Date": ''

    }];
    this.DataToCsv = [];

    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {
    "EmployeeName": any,
    "EmployeeIdentityNumber": any,
    "DebtorIdentityNumber": any,
    "ContructName": any,
    "DebtName": any,
    "CompanyName": any,
    "Debts": any,
    "Total": any,
    "PaymentDue": any,
    "Payment": any,
    "CollectionRate": any,
    "DelayPayment": any,
    "Date": any

  }[];
  allDebtors: { "Name": any }[];
  allComps: { "CompanyName": any }[];
  allEmps: { "Name": any }[];
  date1: any;
  date2: any;
  DataToCsv: {
    "CompanyName": any,
    "DebtName": any,
    "DebtorIdentityNumber": any,
    "ContructName": any,
    "Debts": any,
    "Payment": any,
    "Date": any
    "DelayPayment": any,
    "CollectionRate": any,
    "EmployeeName": any,
    "EmployeeIdentityNumber": any,

  }[];
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
      title: 'تقرير بنسبة التحصیل',
      useBom: true,
      noDownload: false,
      headers: ["إسم الدائن", "إسم المدين", "رقم هوية المدين", "العقد", "الدين", "المدفوع", "تاريخ", "المتبقي", "نسبه التحصيل", "اسم الموظف", "رقم هوية الموظف"],
      nullToEmptyString: true,
    };
    for (var i = 0; i < this.Data.length; i++) {
      this.DataToCsv.push({
        "CompanyName": this.Data[i].CompanyName,
        "DebtName": this.Data[i].DebtName,
        "DebtorIdentityNumber": this.Data[i].DebtorIdentityNumber,
        "ContructName": this.Data[i].ContructName,
        "Debts": this.Data[i].Debts,
        "Payment": this.Data[i].Payment,
        "Date": new Date (this.Data[i].Date) , 
        "DelayPayment": (this.Data[i].Debts - this.Data[i].Payment),
        "CollectionRate": (this.Data[i].CollectionRate),
        "EmployeeName": this.Data[i].EmployeeName,
        "EmployeeIdentityNumber": this.Data[i].EmployeeIdentityNumber
      })
    }
    new Angular5Csv(this.DataToCsv, 'تقرير بنسبةالتحصیل', options);

  }
  ngOnInit() {
    this.AllCOmps();
    this.Alldebs();
    this.Allemps();
    return this.reportsService
      .customerpaymentsreport()
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['DebtorBatches'] ; 
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))


  }

}
