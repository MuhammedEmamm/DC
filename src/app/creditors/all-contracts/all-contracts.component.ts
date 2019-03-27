import { Component, OnInit } from '@angular/core';
import { CreditorsService } from '../../../service/creditors.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
@Component({
  selector: 'app-all-contracts',
  providers: [CreditorsService],
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.css']
})
export class AllContractsComponent implements OnInit {

  constructor(private Cookie: CookieService, private creditorsService: CreditorsService, private appState: AppStateService, private toastr: ToastrService, private router: Router, private Route: ActivatedRoute) {
    this.Contracts = [{
      ID: "",
      Name: "",
      commission: ""
    }];
  }
  formData = {
    'CompanyID': '',
    'Commission': '',
    'ContructName': '',
    'UserID': ''

  };
  name: any;
  Contracts: {
    ID: any,
    Name: any,
    commission: any
  }[]; 
  submissionErrors?: object;
  inProgress = false;
  RoleID = this.Cookie.get('RID') ; 

  AddContract() {
    this.formData.CompanyID = this.Route.snapshot.paramMap.get('id');
    this.formData.UserID = this.Cookie.get('UID');
    return this.creditorsService
      .AddContract(this.formData)
      .then((data) => {

        this.toastr.success('لقد تم اضافة عقد');
        window.location.reload();

      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  GetAllContracts() {
    return this.creditorsService
      .AllContracts(this.Route.snapshot.paramMap.get('id'))
      .then((res) => {
        this.Contracts = res['Compaines'];
        console.log(this.Contracts);

      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);

  }
  ngOnInit() {
    this.GetAllContracts();
  }

}
