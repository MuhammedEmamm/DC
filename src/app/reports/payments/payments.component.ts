import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-payments',
  providers: [ReportsService],

  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.Data = [{
      "TotalMony": '',
      "Payment": '',
      "Remaining": '',
      "ContructID": '',
      "CompanyID": '',
      "CompanyName": '',
      "ContructName": '',
      "Comission": ""
    }];
    this.DataToCsv = [];
    this.allDebtors = [{ Name: '' }];
    this.allComps = [{ CompanyName: '' }]; this.allEmps = [{ Name: '' }];
  }
  Data: {
    "TotalMony": any,
    "Payment": any,
    "Remaining": any,
    "ContructID": any,
    "CompanyID": any,
    "CompanyName": any,
    "ContructName": any,
    "Comission": any
  }[];
  DataToCsv: {
    "TotalMony": any,
    "Payment": any,
    "Remaining": any,
    "CompanyID": any,
    "CompanyName": any,
    "ContructName": any,
    "Comission": any,
    "Rate": any
  }[];
  allDebtors: { "Name": any }[];
  allComps: { "CompanyName": any }[];
  allEmps: { "Name": any }[];

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
      title: 'تقرير المدفوعات',
      useBom: true,
      noDownload: false,
      headers: ["رقم الدائن", "إسم الدائن", "اسم العقد", "النسبة", "اجمالي المبلغ", "المدفوع", "المتبقي"],
      nullToEmptyString: true,
    };
    for (var i = 0; i < this.Data.length; i++) {
      this.DataToCsv.push({
        "CompanyID": this.Data[i].CompanyID,
        "CompanyName": this.Data[i].CompanyName,
        "ContructName": this.Data[i].ContructName,
        "Comission": this.Data[i].Comission,
        "TotalMony": this.Data[i].TotalMony,
        "Payment": this.Data[i].Payment,
        "Remaining": this.Data[i].Remaining,
        "Rate": ((this.Data[i].Payment / this.Data[i].TotalMony) * 100)

      })
    }
    new Angular5Csv(this.DataToCsv, 'تقرير المدفوعات', options);

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

  ngOnInit() {
    return this.reportsService
      .Allpayments()
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.Data = res['Response']['Payments'] ; 
          console.log(this.Data);
        }
      })
      .catch(res => console.log(res))


  }

}
