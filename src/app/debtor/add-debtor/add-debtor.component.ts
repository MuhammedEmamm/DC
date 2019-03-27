import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-debtor',
  providers: [DebtorsService],
  templateUrl: './add-debtor.component.html',
  styleUrls: ['./add-debtor.component.css']
})
export class AddDebtorComponent implements OnInit {

  constructor(private debtorsService: DebtorsService, private toastr: ToastrService, private Router: Router) {
    this.formData = [{
      ContructID: "", Name: "", Adrees: "", Job: "", Phone: "", IdentityType: "", IdentityNumber: "", Mony: '', ProductID: '', UserID: ""
    }];
    this.Contracts = [{
      ID: "",
      Name: "",
      commission: ""
    }];
    this.Prods = [{
      ID: "",
      Name: "",
      Code: ""
    }];
    this.allComps = [{ CompanyName: '', CompanyID: '' }];
    this.Emps = [{ID:"" , Name:""}] ; 
  }

  submissionErrors?: object;
  inProgress = false;
  formData: { ContructID: any, Name: any, Adrees: any, Job: any, Phone: any, IdentityType: any, IdentityNumber: any, Mony: any, ProductID: any, UserID: any }[];
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
  allComps: { "CompanyName": any, "CompanyID": any }[];
  CompanyName: any;
  Emps: {
    ID: any,
    Name: any
  }[] ; 
  onSubmit() {
    console.log('dataa', this.formData);
    this.inProgress = true;
    this.submissionErrors = null;
    return this.debtorsService
      .addDebtor(this.formData)
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.toastr.success('لقد تم اضافه المدين');
          this.Router.navigateByUrl('/all-debtors') ;
        } else if (res['errorMessage']) {
          this.submissionErrors = res['errorMessage'];
        }
      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);
  }
  AllCOmps() {
    return this.debtorsService
      .allCreditorsComapnies()
      .then((data) => {
        this.allComps = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  AllEmps() {
    return this.debtorsService
      .allEmployee()
      .then((data) => {
        this.Emps = data['users'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }

  GetAllContracts(ID) {
    console.log(ID);
    return this.debtorsService
      .AllContracts(ID)
      .then((res) => {
        this.Contracts = res['Compaines'];
        console.log(this.Contracts);

      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }
  GetAllProds(ID) {
    return this.debtorsService
      .AllProds(ID)
      .then((res) => {
        this.Prods = res['Products'];
        console.log(this.Prods);

      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }
  ngOnInit() {
    this.AllEmps() ; 
    this.AllCOmps();
  }

}
