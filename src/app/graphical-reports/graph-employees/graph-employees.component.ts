import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-employees',
  providers: [ReportsService],
  templateUrl: './graph-employees.component.html',
  styleUrls: ['./graph-employees.component.css']
})
export class GraphEmployeesComponent implements OnInit {

  constructor(private Cookie: CookieService, private reportsService: ReportsService, private toastr: ToastrService, private router: Router) { }
  Data: { labels: any[], datasets: { label: any, data: any[], backgroundColor: any }[] } = {
    labels: [], datasets: [{ label: 'Debts', data: [], backgroundColor: 'rgba(0,188,212,1)' }, { label: 'Collected', data: [], backgroundColor: 'rgba(255,87,34,1)' }]
  };
  Data1: { labels: any[], datasets: { label: any, data: any[], backgroundColor: any }[] } = {
    labels: [], datasets: [{ label: 'Collected', data: [], backgroundColor: 'rgba(33 , 150 , 243 ,1)' }]
  };

  dateCollect: any;
  dateCalls: any;
  type = 'bar';
  options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  options1 = {
    responsive: true,
    maintainAspectRatio: true,
  };
  


  EmpCollect() {

    this.reportsService.EmployeesCollection(this.dateCollect).subscribe((res: any) => {
      if (res.isSuccess) {
        this.Data = {
          labels: [], datasets: [{ label: 'Debts', data: [], backgroundColor: 'rgba(0,188,212,1)' }, { label: 'Collected', data: [], backgroundColor: 'rgba(255,87,34,1)' }]
        };

        for (let i = 0; res.Response.EmployeeCollection !== undefined && i < res.Response.EmployeeCollection.length; i++) {
          this.Data.labels.push(res.Response.EmployeeCollection[i].EmployeeName);
          this.Data.datasets[0].data.push(res.Response.EmployeeCollection[i].AllDebt);
          this.Data.datasets[1].data.push(res.Response.EmployeeCollection[i].AllCollected);
        }

      }
    });

  }
  EmpCalls() {
    this.reportsService.EmployeesCalls(this.dateCalls).subscribe((res: any) => {
      if (res.isSuccess) {

        this.Data1 = {
          labels: [], datasets: [{ label: 'Calls', data: [], backgroundColor: 'rgba(33 , 150 , 243 ,1)' }]
        };
        for (let i = 0; res.Response.CallsCollection !== undefined && i < res.Response.CallsCollection.length; i++) {
          this.Data1.labels.push(res.Response.CallsCollection[i].EmployeeName);
          this.Data1.datasets[0].data.push(res.Response.CallsCollection[i].NumberOfCalls);
        }
      }
    });

  }
  ngOnInit() {

  }

}
