import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-collection',
  providers: [ReportsService],

  templateUrl: './graph-collection.component.html',
  styleUrls: ['./graph-collection.component.css']
})
export class GraphCollectionComponent implements OnInit {

  constructor(private Cookie: CookieService, private reportsService: ReportsService, private toastr: ToastrService, private router: Router) { }
  Data: { labels: any[], datasets: { label: any, data: any[], backgroundColor: any }[] } = {
    labels: [], datasets: [{ label: 'Debts', data: [], backgroundColor: 'rgba(0,188,212,1)' }, { label: 'Collected', data: [], backgroundColor: 'rgba(255,87,34,1)' }]
  };

  Data1: { labels: any[], datasets: { label: any, data: any[] }[] } = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Collected', data: Array(12).fill(0) }]
  };



  date: any;
  type = 'bar';
  type2 = 'line';

  CompanyID: any = '';
  allComps: { "CompanyName": any, "CompanyID" }[] = [];

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
    maintainAspectRatio: true
  };

  CollectByCompanyFilter(ID) {

    if (ID === '') {
      this.ngOnInit();
      return;
    }
    this.reportsService.CollectionReportCompany(ID).subscribe((res: any) => {
      if (res.isSuccess) {
        this.Data1 = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Collected', data: Array(12).fill(0) }]
        };
        for (let i = 0; res.Response.CollectionsReport !== undefined && i < res.Response.CollectionsReport.length; i++) {
          for (let j = 0; res.Response.CollectionsReport[i].AllCollections !== undefined && j < res.Response.CollectionsReport[i].AllCollections.length; j++) {
            this.Data1.datasets[0].data[j] += res.Response.CollectionsReport[i].AllCollections[j].Collection;
          }
        }
        console.log(this.Data);
      }

    });
  }


  AllCOmps() {
    return this.reportsService
      .allCreditorsComapnies()
      .then((data) => {
        this.allComps = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }

  CollectCompanies(date) {
    this.reportsService.CollectionReportCompanines(date).subscribe((res: any) => {
      this.Data = {
        labels: [], datasets: [{ label: 'Debts', data: [], backgroundColor: 'rgba(0,188,212,1)' }, { label: 'Collected', data: [], backgroundColor: 'rgba(255,87,34,1)' }]
      };
      
      console.log(res);
      for (let i = 0; res.Response.CollectionsCompies !== undefined && i < res.Response.CollectionsCompies.length; i++) {
        this.Data.labels.push(res.Response.CollectionsCompies[i].CompanyName);
        this.Data.datasets[0].data.push(res.Response.CollectionsCompies[i].AllDebts);
        this.Data.datasets[1].data.push(res.Response.CollectionsCompies[i].AllCollections);
      }
      console.log(this.Data);

    });
  }
  ngOnInit() {
    this.AllCOmps();
    this.CollectCompanies((new Date().getMonth() + 1) + '-' + new Date().getFullYear());

    this.reportsService.CollectionReport().subscribe((res: any) => {
      if (res.isSuccess) {
        this.Data1 = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Collected', data: Array(12).fill(0) }]
        };
        for (let i = 0; res.Response.CollectionsReport !== undefined && i < res.Response.CollectionsReport.length; i++) {
          for (let j = 0; res.Response.CollectionsReport[i].AllCollections !== undefined && j < res.Response.CollectionsReport[i].AllCollections.length; j++) {
            this.Data1.datasets[0].data[j] += res.Response.CollectionsReport[i].AllCollections[j].Collection;
          }
        }
        console.log(this.Data);
      }
      
    });

  }

}
