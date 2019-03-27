import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-reports',
  providers: [ReportsService],
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})

export class AllReportsComponent implements OnInit {

  constructor(private Cookie: CookieService, private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router) { }
  RoleID = this.Cookie.get('RID');
  
  ngOnInit() {
  }

}
