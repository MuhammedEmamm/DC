import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-graphs-reports',
  providers: [ReportsService],
  templateUrl: './all-graphs-reports.component.html',
  styleUrls: ['./all-graphs-reports.component.css']
})
export class AllGraphsReportsComponent implements OnInit {

  constructor(private Cookie: CookieService, private reportsService: ReportsService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

}
