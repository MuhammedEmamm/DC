import { Component, OnInit } from '@angular/core';
import { KpiService } from './../../../service/kpi.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-calls-targets',
  providers: [KpiService],

  templateUrl: './calls-targets.component.html',
  styleUrls: ['./calls-targets.component.css']
})
export class CallsTargetsComponent implements OnInit {

  constructor(private kpiservice: KpiService, private toast: ToastrService, route: Router, private Cookie: CookieService) {

  }
  RoleID = this.Cookie.get('RID');
  SupName: any = "";
  Emps: {
    ID: any,
    Name: any,
    Role: any,
  }[] = [];

  AllData: {
    UserID: any,
    NumberOfDebtor: any,
    Target: any,
    SuperVisiorID: any,
    Role: any,
    UserName: any

  }[] = [];
  Details: {
    UserID: any
    Target: any,
    Date: any
  } = {
      UserID: '',
      Target: 0,
      Date: (new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getFullYear()
    };

  EditPreprocess(ID) {
    this.Details.UserID = ID;
    this.Details.Target = this.AllData.filter(it => it.UserID.toString() == ID.toString())[0].Target;
  }
  SetTarget() {
    this.kpiservice.SetTargetCall(this.Details).subscribe((res: any) => {
      this.toast.success('تم تعديل الهدف');
      window.location.reload();
    });
  }
  AllEmps() {
    this.kpiservice.AllEmps().subscribe((res: any) => {
      this.Emps = res.Response.users;
      this.Emps = this.Emps.filter(it => it.Role.toString() == '1');
      console.log(this.Emps);

    });
  }

  ngOnInit() {
    this.kpiservice.ListAllCalls().subscribe((res: any) => {
      if (res.isSuccess) {

        this.AllData = res.Response.UserTarget;
        if (this.RoleID == '1')
          this.AllData = this.AllData.filter(it => it.SuperVisiorID == this.Cookie.get('UID'));
        if (this.RoleID == '0')
          this.AllData = this.AllData.filter(it => it.UserID == this.Cookie.get('UID'));

      }
    });
    this.AllEmps();


  }

}
