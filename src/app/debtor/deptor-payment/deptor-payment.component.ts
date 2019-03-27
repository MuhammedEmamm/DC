import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

let input: FormData = new FormData();

@Component({
  selector: 'app-deptor-payment',
  providers: [DebtorsService],
  templateUrl: './deptor-payment.component.html',
  styleUrls: ['./deptor-payment.component.css']
})
export class DeptorPaymentComponent implements OnInit {

  constructor(private Cookie:CookieService , private Route: ActivatedRoute, private debtorsService: DebtorsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) {
    this.debtorsPayment = [{
      Date: "",
      ID: "",
      Mony: "",
      Notes: "",
      StatusType: "",
      Payment: "",
      Type: ""
    }] ; 

    this.editPaymentData = {
      BatchID: "",
      Mony: "",
      Notes: "",
      Status: "",
      Attachment: "",
      Type: "",
      Payment: ""
    } ; 
  }
  RoleID  = this.Cookie.get('RID') ; 
  ID: any = this.Route.snapshot.paramMap.get('id');
  debtorsPayment: {
    Date: any,
    ID: any,
    Mony: any
    Notes: any,
    StatusType: any,
    Payment: any,
    Type: any
  }[];
  editPaymentData: {
    BatchID: any,
    Mony: any
    Notes: any,
    Status: any,
    Attachment: any,
    Payment: any,
    Type: any
  };
  formData = {
    'debtorID': ''
  };
  paymentData = {
    'BatchID': ''
  };
  files ; 
  onChange(event) {
    this.files = event.srcElement.files[0];
    console.log(this.files);
  }


  ngOnInit() {
    this.formData['debtorID'] = this.Route.snapshot.paramMap.get('id');
    return this.debtorsService
      .debtorsPayment(this.formData)
      .then((data) => {
        this.debtorsPayment = data['Batches'];
        console.log(this.debtorsPayment);
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

  editPayment() {
    input = new FormData();
    input.append('BatchID', this.editPaymentData.BatchID);
    input.append('Mony', this.editPaymentData.Mony);
    input.append('Status', this.editPaymentData.Status);
    input.append('Notes', this.editPaymentData.Notes);
    input.append('Type', this.editPaymentData.Type);
    if(this.editPaymentData.Payment === null)
    this.editPaymentData.Payment = 0 ; 
    input.append('Payment', this.editPaymentData.Payment);
    input.append('Attachment', this.files);

    console.log(this.editPaymentData.Payment) ; 
    return this.debtorsService
      .editPayment(input)
      .then((data) => {
        if (data['isSuccess'] == true) {
          this.toastr.success('لقد تم التعديل');
          window.location.reload();
        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

  EditPreprocess(BatchID) {
    for (var i = 0; i < this.debtorsPayment.length; i++) {
      if (this.debtorsPayment[i].ID === BatchID) {
        this.editPaymentData.BatchID = BatchID;
        this.editPaymentData.Mony = this.debtorsPayment[i].Mony;
        this.editPaymentData.Status = this.debtorsPayment[i].StatusType;
        this.editPaymentData.Notes = this.debtorsPayment[i].Notes;
        this.editPaymentData.Payment = this.debtorsPayment[i].Payment ; 
        this.editPaymentData.Type = this.debtorsPayment[i].Type ; 
        break;
      }
    }
  }

  deletePayment(PaymentID) {
    this.paymentData.BatchID = PaymentID;
    return this.debtorsService
      .deletePayment(this.paymentData)
      .then((data) => {
        if (data['isSuccess'] == true) {
          this.toastr.success('لقد تم الحذف');
          this.ngOnInit();
        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
