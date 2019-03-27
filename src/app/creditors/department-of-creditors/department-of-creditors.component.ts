import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { CreditorsService } from '../../../service/creditors.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-of-creditors',
  providers: [CreditorsService],
  templateUrl: './department-of-creditors.component.html',
  styleUrls: ['./department-of-creditors.component.css']
})
export class DepartmentOfCreditorsComponent implements OnInit {

  constructor(private Cookie : CookieService ,  private creditorsService: CreditorsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) { }

  creditorsComapnies: {};
  name : any  ; 
  RoleID = this.Cookie.get('RID') ; 
  creditorData = {
    'CompanyID': ''
  };
  formData = {
    'CompanyID': '',
    'Commission': '',
    'ContructName': '',

  };
  ngOnInit() {
    this.getAllCreditors();
  }

  getAllCreditors() {
    return this.creditorsService
      .allCreditorsComapnies()
      .then((data) => {
        this.creditorsComapnies = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

  editCompany(creditorComapny) {
    this.appState.setState(AppStateKey.CreditorDetails, creditorComapny);
    this.router.navigateByUrl('/add-creditor');
  }

  deleteCompany(companyId) {
    this.creditorData['CompanyID'] = companyId;
    console.log('this.creditorData', this.creditorData);
    return this.creditorsService
      .deleteCreditor(this.creditorData)
      .then((data) => {
        if (data['isSuccess'] == true) {
          this.toastr.success('لقد تم حذف الدائن');
          this.getAllCreditors();
        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  UID(ID) {
    this.formData.CompanyID = ID;
  }
  AddContract() {
    return this.creditorsService
      .AddContract(this.formData)
      .then((data) => {

        this.toastr.success('لقد تم اضافة عقد');
        window.location.reload();

      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
}
