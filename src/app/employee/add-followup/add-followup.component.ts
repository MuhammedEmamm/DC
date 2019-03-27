import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { CookieService } from 'ngx-cookie-service'
import { from } from 'rxjs/observable/from';
let input: FormData = new FormData();

@Component({
  selector: 'app-add-followup',
  providers: [EmployeeService],
  templateUrl: './add-followup.component.html',
  styleUrls: ['./add-followup.component.css']
})
export class AddFollowupComponent {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService, private appState: AppStateService, private Cookie: CookieService, private Router: Router) {
    this.formData = {
      "Notes": '',
      "Date": '',
      "Attachment": '',
      "Mony": '',
      "DebtID": '',
      "StatusType": '',
      "Type":''

    }
    this.AllDebtors();
  }
  UserID = this.Cookie.get('UID');

  submissionErrors?: object;
  inProgress = false;
  allDebtors: {
    "UserID": any,
    "DebtorID": any,
    "Name": any,
    "Phone": any,
    "IdentityNumber": any,
    "IdentityType": any,
    "Job": any,
    "ContructID": any,
    "checked": boolean
  }[];
  formData: {
    "Notes": any,
    "Date": any,
    "Attachment": any,
    "Mony": any,
    "DebtID": any,
    "StatusType": any,
    "Type":any

  };
  file: File;
  incomingfile(event) {
    var files = event.target.files;
    this.file = files[0];
  }

  AllDebtors() {
    return this.employeeService
      .AllDebtors()
      .then((data) => {
        this.allDebtors = data['Debtors'];
        this.allDebtors = this.allDebtors.filter(it => it['UserID'] == this.Cookie.get('UID'));
        console.log(this.allDebtors) ;
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  onSubmit() {
    this.inProgress = true;
    this.submissionErrors = null;
    input = new FormData();
    input.append('Notes', this.formData.Notes);
    input.append('Date', this.formData.Date);
    input.append('StatusType', this.formData.StatusType);
    input.append('DebtID', this.formData.DebtID);
    input.append('Mony', this.formData.Mony);
    input.append('Type', this.formData.Type);
    input.append('Attachment', this.file);


    return this.employeeService

      .addFollowUp(input)
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.toastr.success('لقد تم اضافه متابعة');
          this.Router.navigateByUrl('user-followup')
        } else if (res['errorMessage']) {
          this.submissionErrors = res['errorMessage'];
        }
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(() => this.inProgress = false);
  }
}
