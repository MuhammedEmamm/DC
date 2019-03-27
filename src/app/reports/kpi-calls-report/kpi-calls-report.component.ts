import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-kpi-calls-report',
  providers: [ReportsService],

  templateUrl: './kpi-calls-report.component.html',
  styleUrls: ['./kpi-calls-report.component.css']
})
export class KpiCallsReportComponent implements OnInit {

  constructor(private reportsService: ReportsService, private Cookie: CookieService, private toastr: ToastrService, private router: Router) { }
  AllData: {
    UserName: any,
    SupervisiorName: any,
    TargetCalls: any,
    NumberCalls: any
  }[] = [];

  ngOnInit() {
    this.reportsService.TargetCalls().then((res) => {
      this.AllData = res['UserActivityReport']
    })
      .catch(res => console.log(res))

  }

}
