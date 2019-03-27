import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Session } from 'protractor';
import { CookieService } from 'ngx-cookie-service'
@Component({
  selector: 'app-deptor-calllog',
  providers: [DebtorsService],
  templateUrl: './deptor-calllog.component.html',
  styleUrls: ['./deptor-calllog.component.css']
})
export class DeptorCalllogComponent implements OnInit {

  constructor(private debtorsService: DebtorsService, private Route: ActivatedRoute, private toastr: ToastrService, private Cookie: CookieService) { }
  RoleID  = this.Cookie.get('RID') ; 

  debtorsCallLog: {};
  formData: { Time: any, DebtorID: any, StaffID: any, ContructID: any, Date: any , Status:any , Notes:any , Phone : any } = { Time: "", DebtorID: "", StaffID: "", ContructID: "", Date: "" , Status:"" , Notes:"" , Phone : "" };
  Time: any;
  submissionErrors?: object;
  inProgress = false;
  ID: any = this.Route.snapshot.paramMap.get('id');
  onSubmit() {
    this.formData.Time = this.Time;
    this.formData.Date = new Date();
    this.formData.DebtorID = this.ID;
    this.formData.StaffID = this.Cookie.get('UID');;
    this.formData.ContructID = this.Route.snapshot.paramMap.get('id2');
    console.log('dataa', this.formData);
    this.inProgress = true;
    this.submissionErrors = null;
    return this.debtorsService
      .addCall(this.formData)
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.toastr.success('لقد تم اضافه المكالمة');
          window.location.reload();
        }
      })
      .catch(res => this.submissionErrors = res.error)
      .then(() => this.inProgress = false);
  }
  ngOnInit() {
    return this.debtorsService
      .debtorsCallLog(this.ID)
      .then((data) => {
        this.debtorsCallLog = data['Debtors'];
        console.log(this.debtorsCallLog);
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
