import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-kpi-collection-report',
  providers: [ReportsService],
  templateUrl: './kpi-collection-report.component.html',
  styleUrls: ['./kpi-collection-report.component.css']
})
export class KpiCollectionReportComponent implements OnInit {

  constructor(private reportsService: ReportsService, private Cookie: CookieService, private toastr: ToastrService, private router: Router) { }
  AllData: {
    UserName: any,
    SupervisiorName: any,
    TargetCollection: any,
    DebtCollection: any
  }[] = [];
  
  ngOnInit() {
    this.reportsService.TargetCollection().then((res) => {
      this.AllData = res['UserActivityReport']

    })
      .catch(res => console.log(res))

  }


}
