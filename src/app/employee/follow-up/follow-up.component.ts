import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs/observable/from';
let input: FormData = new FormData();

@Component({
  selector: 'app-follow-up',
  providers: [EmployeeService],
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private Cookie: CookieService) {
    this.formData = {
      "ID": '',
      "Notes": '',
      "Date": '',
      "Attachment": '',
      "Mony": '',
      "DebtID": '',
      "StatusType": '',
      "Type":''

    }
    this.usersFollowup = [{
      "ID": '',
      "Notes": '',
      "Appointment": '',
      "Attachment": '',
      "Mony": '',
      "DebtorName": '',
      "StatusType": '',
      "EmployeeName": '',
      "CompanyName": ''

    }];
    this.AllDebtors();

  }
  RoleID  = this.Cookie.get('RID') ; 

  formData: {
    "ID": any,
    "Notes": any,
    "Date": any,
    "Attachment": any,
    "Mony": any,
    "DebtID": any,
    "StatusType": any,
    "Type" : any

  };

  allDebtors: {
    "DebtorID": any,
    "Name": any,
    "Phone": any,
    "IdentityNumber": any,
    "IdentityType": any,
    "Job": any,
    "ContructID": any,
    "checked": boolean
  }[];
  usersFollowup: {
    "ID": any,
    "Notes": any,
    "Appointment": any,
    "Attachment": any,
    "Mony": any,
    "EmployeeName": any,
    "StatusType": any,
    "DebtorName": any,
    "CompanyName": any;
  }[];
  file: File;
  incomingfile(event) {
    var files = event.target.files;
    this.file = files[0];
  }
  
  editFollowup() {
    input = new FormData();
    input.append('ID' , this.formData.ID) ; 
    input.append('Notes', this.formData.Notes);
    input.append('Date', this.formData.Date);
    input.append('StatusType', this.formData.StatusType);
    input.append('DebtID', this.formData.DebtID);
    input.append('Mony', this.formData.Mony);
    input.append('Type', this.formData.Type);
    input.append('Attachment', this.file);
    
    return this.employeeService
      .editFollowUp(input)
      .then((data) => {
        window.location.reload();
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  DeleteFollowup(ID) {
    return this.employeeService
      .deleteFollowUp({ "FollowID": ID })
      .then((data) => {
        window.location.reload();
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

  PrePro(ID) {
    for (var i = 0; this.usersFollowup != undefined && i < this.usersFollowup.length; i++) {
      if (ID === this.usersFollowup[i].ID) {
        this.formData.ID = ID;
        this.formData.Mony = this.usersFollowup[i].Mony;
        this.formData.StatusType = this.usersFollowup[i].StatusType;
        this.formData.Notes = this.usersFollowup[i].Notes;
        this.formData.Date = this.usersFollowup[i].Appointment;
        break;
      }
    }
  }
  AllDebtors() {
    return this.employeeService
      .AllDebtors()
      .then((data) => {
        this.allDebtors = data['Debtors'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  ngOnInit() {
    return this.employeeService
      .userFollowup(this.Cookie.get('UID'))
      .then((data) => {
        console.log(data['FollowUp']);
        this.usersFollowup = data['FollowUp'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }


}
