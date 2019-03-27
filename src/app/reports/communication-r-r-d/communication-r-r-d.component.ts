import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-communication-r-r-d',
  providers: [ReportsService],

  templateUrl: './communication-r-r-d.component.html',
  styleUrls: ['./communication-r-r-d.component.css']
})
export class CommunicationRRDComponent implements OnInit {

  constructor(private reportsService: ReportsService, private appState: AppStateService, private toastr: ToastrService, private router: Router , private Route : ActivatedRoute) { 
    this.Data = [{
      "ID": '',
      "DebtorName": '',
      "StaffName": '',
      "CompanyName": '',
      "Date": '',
      "Time": ''
    }] ;
  }
  Data: {
    "ID": any,
    "DebtorName": any,
    "StaffName": any,
    "CompanyName": any,
    "Date": any,
    "Time": any
  }[];

  ngOnInit() {
    return this.reportsService
    .recordRepDetails(this.Route.snapshot.paramMap.get('id'))
    .then((res) => {
      if (res['isSuccess'] == true) {
        this.Data = res['Response']['Debtors']
        console.log(this.Data);
      }
    })
    .catch(res => console.log(res))

  }

}
