import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CreditorsService } from '../../../service/creditors.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-the-creditor',
  providers: [CreditorsService],
  templateUrl: './the-creditor.component.html',
  styleUrls: ['./the-creditor.component.css']
})
export class TheCreditorComponent {

  constructor(private Cookie: CookieService, private creditorsService: CreditorsService, private toastr: ToastrService, private appState: AppStateService, private Router: Router) { }

  submissionErrors?: object;
  inProgress = false;
  formData = this.appState.getState(AppStateKey.CreditorDetails) || {};

  onSubmit() {
    this.inProgress = true;
    this.submissionErrors = null;
    if (this.formData['CompanyID'] !== undefined) {
      this.formData.UserID = this.Cookie.get('UID');

      return this.creditorsService
        .editCreditor(this.formData)
        .then((res) => {
          if (res['isSuccess'] == true) {
            this.toastr.success('لقد تم تعديل الدائن');
            this.Router.navigateByUrl('/department-of-creditors') ;

          } else if (res['errorMessage']) {
            this.submissionErrors = res['errorMessage'];
          }
          this.appState.removeState(AppStateKey.CreditorDetails);
          this.formData = {};
        })
        .catch(res => {
          this.appState.removeState(AppStateKey.CreditorDetails);
          this.formData = {};
          this.submissionErrors = res.errorMessage;
        })
        .then(() => this.inProgress = false);
    } else {
      this.formData.UserID = this.Cookie.get('UID');
      return this.creditorsService
        .addCreditor(this.formData)
        .then((res) => {
          if (res['isSuccess'] == true) {
            this.toastr.success('لقد تم اضافه الدائن');
            this.Router.navigateByUrl('/department-of-creditors') ;
          } else if (res['errorMessage']) {
            this.submissionErrors = res['errorMessage'];
          }
        })
        .catch(res => this.submissionErrors = res.errorMessage)
        .then(() => this.inProgress = false);
    }
  }
}
