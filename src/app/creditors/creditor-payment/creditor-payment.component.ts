import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CreditorsService } from '../../../service/creditors.service';

@Component({
  selector: 'app-creditor-payment',
  providers: [CreditorsService],
  templateUrl: './creditor-payment.component.html',
  styleUrls: ['./creditor-payment.component.css']
})
export class CreditorPaymentComponent implements OnInit {

  constructor(private creditorsService: CreditorsService, private Route: ActivatedRoute) {
    this.creditorsPayment = [{
      "TotalMony": '',
      "Payment": '',
      "Remaining": '',
      "ContructID": '',
      "CompanyID": '',
      "CompanyName": '',
      "ContructName": '',
      "Attachment": []
    }];
  }


  creditorsPayment: {
    "TotalMony": any,
    "Payment": any,
    "Remaining": any,
    "ContructID": any,
    "CompanyID": any,
    "CompanyName": any,
    "ContructName": any,
    "Attachment": Array<any>

  }[];
  ngOnInit() {
    return this.creditorsService
      .allCreditorsPayment()
      .then((data) => {
        this.creditorsPayment = data['Payments'];
      this.creditorsPayment =  this.creditorsPayment.filter(it => it['CompanyID'].toString() === this.Route.snapshot.paramMap.get('id').toString());
        console.log(this.creditorsPayment);
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
