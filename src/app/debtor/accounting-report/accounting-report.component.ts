import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { CookieService } from 'ngx-cookie-service'
@Component({
  selector: 'app-accounting-report',
  providers: [DebtorsService],
  templateUrl: './accounting-report.component.html',
  styleUrls: ['./accounting-report.component.css']
})
export class AccountingReportComponent implements OnInit {

  constructor(private debtorsService: DebtorsService, private appState: AppStateService, private Cookie: CookieService, private Route: ActivatedRoute) { 
    this.accountingReport = [{
      "DebtName": '',
      "CompanyName":'',
      "Debts": '',
      "Total": '',
      "PaymentDue": '',
      "Payment": '',
      "CollectionRate":'',
      "DelayPayment": '',
      "Date": ''
    } ]; 
  }

  accountingReport: {
    "DebtName": any,
    "CompanyName": any,
    "Debts": any,
    "Total": any,
    "PaymentDue": any,
    "Payment": any,
    "CollectionRate":any,
    "DelayPayment": any,
    "Date": any
  }[];
  debtor = {
    'DebtorID': ''
  };

  ngOnInit() {

    return this.debtorsService
      .debtorsAccountingReport(this.Route.snapshot.paramMap.get('id'))
      .then((data) => {
        console.log(data) ; 
        this.accountingReport = data['DebtorBatches'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
}
