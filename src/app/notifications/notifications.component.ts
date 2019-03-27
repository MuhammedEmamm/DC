import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-notifications',
  providers: [EmployeeService],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService, private Cookie: CookieService, private Router: Router) {
    this.Notfications = [{
      "ID": '',
      "NotificationFrom": '',
      "NotificationTo": '',
      "NotificationUserID": '',
      "Date": '',
      "MessageContent": '',
      "IsRead": ''
    }];
    this.NotficationsDetails = {
      "ID": '',
      "NotificationFrom": '',
      "NotificationTo": '',
      "NotificationUserID": '',
      "Date": '',
      "MessageContent": '',
      "IsRead": ''
    };

  }
  submissionErrors?: object;
  inProgress = false;
  Notfications: {
    "ID": any,
    "NotificationFrom": any,
    "NotificationTo": any,
    "NotificationUserID": any,
    "Date": any,
    "MessageContent": any,
    "IsRead": any
  }[];
  NotficationsDetails: {
    "ID": any,
    "NotificationFrom": any,
    "NotificationTo": any,
    "NotificationUserID": any,
    "Date": any,
    "MessageContent": any,
    "IsRead": any
  };

  PrePro(ID) {
    for (var i = 0; this.Notfications != undefined && i < this.Notfications.length; i++) {
      if (ID === this.Notfications[i].ID) {
        this.NotficationsDetails = this.Notfications[i];
        break;
      }
    }

    return this.employeeService

      .NotifRead(ID)
      .then((res) => {
        console.log('read');
        this.ngOnInit() ; 
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(() => this.inProgress = false);

  }
  
  ngOnInit() {
    return this.employeeService

      .Notif(this.Cookie.get('UID'))
      .then((res) => {
        this.Notfications = res['Notifications'];
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(() => this.inProgress = false);
  }

}
