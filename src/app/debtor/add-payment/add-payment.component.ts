import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { ActivatedRoute, Router } from '@angular/router';
let input: FormData = new FormData();

@Component({
  selector: 'app-add-payment',
  providers: [DebtorsService],
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})


export class AddPaymentComponent implements OnInit {

  constructor(private Router: Router, private Route: ActivatedRoute, private DebtorsService: DebtorsService, private toastr: ToastrService, private appState: AppStateService) {

    this.formData = {
      DebtorID: "",
      Mony: "",
      Status: "",
      Notes: "",
      ContructID: "",
      ProductID: "",
      Attachment: "",
      Payment: "",
      Type: "",
    };
    this.Contracts = [{
      ID: "",
      Name: "",
      commission: ""
    }];
    this.allComps = [{ CompanyName: '', CompanyID: '' }];

    this.allDebtors = [];
  }
  files ; 
  allDebtors: { "CompanyCode": any, "ProductCode": any, "ProductName": any, "ContructID": any }[];
  submissionErrors?: object;
  inProgress = false;
  Contracts: {
    ID: any,
    Name: any,
    commission: any
  }[] ; 
  Prods: {
    ID: any,
    Name: any,
    Code: any
  }[] ; 
  formData: {
    DebtorID: any,
    Mony: any,
    Status: any,
    Notes: any,
    ContructID: any,
    ProductID: any,
    Attachment: any,
    Payment: any,
    Type: any
  };
  allComps: { "CompanyName": any, "CompanyID": any }[];
  CompanyName: any;

  AllCOmps() {
    return this.DebtorsService
      .allCreditorsComapnies()
      .then((data) => {
        this.allComps = data['Compaines'];
        this.allComps = this.allComps.filter(it => it['CompanyCode'].toString() === this.allDebtors[0].CompanyCode.toString())
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  GetAllContracts(ID) {
    console.log(ID);
    return this.DebtorsService
      .AllContracts(ID)
      .then((res) => {
        this.Contracts = res['Compaines'] ; 
        this.Contracts = this.Contracts.filter(it => it['ID'].toString() === this.allDebtors[0].ContructID.toString());
        console.log(this.Contracts);

      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }

  onChange(event) {
    this.files = event.srcElement.files[0];
    console.log(this.files);
  }
  GetAllProds(ID) {
    return this.DebtorsService
      .AllProds(ID)
      .then((res) => {
        this.Prods = res['Products'];
        this.Prods = this.Prods.filter(it => it['Code'].toString() === this.allDebtors[0].ProductCode.toString())
        console.log(this.Prods);
      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }


  onSubmit() {
    this.inProgress = true;
    this.submissionErrors = null;
    this.formData.DebtorID = this.Route.snapshot.paramMap.get('id');
    // Add your values in here
    console.log(this.formData);
    input = new FormData();
    input.append('DebtorID', this.Route.snapshot.paramMap.get('id'));
    input.append('Mony', this.formData.Mony);
    input.append('Status', this.formData.Status);
    input.append('Notes', this.formData.Notes);
    input.append('ContructID', this.formData.ContructID);
    input.append('Payment', this.formData.Payment);
    input.append('Type', this.formData.Type);
    input.append('Attachment', this.files);


    console.log(input.getAll('Attachment'));
    return this.DebtorsService
      .addPayment(input)
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.toastr.success('لقد تم الاضافه');
          this.Router.navigateByUrl(`debtor-payment/${this.Route.snapshot.paramMap.get('id')}`);

        } else if (res['errorMessage']) {
          this.submissionErrors = res['errorMessage'];
        }
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(() => this.inProgress = false);
  }

  AllDeb() {
    return this.DebtorsService
      .AllDebtors()
      .then((data) => {
        this.allDebtors = data['Debtors'];
        this.allDebtors = this.allDebtors.filter(it => it['DebtorID'] == this.Route.snapshot.paramMap.get('id'));
        this.AllCOmps();

        console.log(this.allDebtors);
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  ngOnInit() {
    this.AllDeb();
  }
  // }
}
