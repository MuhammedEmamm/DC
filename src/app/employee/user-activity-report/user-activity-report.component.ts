import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-activity-report',
  providers: [EmployeeService],
  templateUrl: './user-activity-report.component.html',
  styleUrls: ['./user-activity-report.component.css']
})
export class UserActivityReportComponent implements OnInit {

  employeeCollection: {
    CompanyName: any,
    DebtorName: any,
    FollowUps: Array<{
      Notes: any,
      Date: any,
      Mony: any
    }>
    Attachments: Array<any>
  }[];
  formData: {
    UserID: any,
    DateFrom: any,
    DateTo: any
  }
  
  constructor(private employeeService: EmployeeService, private Cookie: CookieService , private Route : ActivatedRoute) {
    this.formData = {
      UserID: "",
      DateFrom: "",
      DateTo: ""
    };
    this.employeeCollection = [{
      CompanyName: "",
      DebtorName: "",
      FollowUps: [{ Notes: "", Date: "", Mony: "" }],
      Attachments: []
    }];

  }
  ID = this.Route.snapshot.paramMap.get('id') ; 

  ngOnInit() {
    this.formData.UserID = this.ID; 
    return this.employeeService
      .employeeCollection(this.formData)
      .then((data) => {
        console.log(data) ; 
        this.employeeCollection = data['UserActivityReport'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
