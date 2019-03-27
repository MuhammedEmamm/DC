import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-debts',
  providers: [ReportsService],

  templateUrl: './graph-debts.component.html',
  styleUrls: ['./graph-debts.component.css']
})
export class GraphDebtsComponent implements OnInit {

  constructor(private Cookie: CookieService, private reportsService: ReportsService, private toastr: ToastrService, private router: Router) { }


  type = 'pie';
  type2 = 'bar';

  options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  CompanyID: any = '';
  CompanyID1: any = '';

  allComps: { "CompanyName": any, "CompanyID" }[] = [];
  Data: {
    labels: any[],
    datasets: { data: any[] , backgroundColor:any[]}[]
  } = { labels: ['جاري التحصيل', 'مدفوع', 'مستحق'], datasets: [{ data: Array(3).fill(0) , backgroundColor:['rgba(255,87,34,1)' , 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)'] }] };

  Data2: {
    labels: any[],
    datasets: {label:any, data: any[] , backgroundColor:any[] }[]
  } = { labels: ['جاري التحصيل', 'مدفوع', 'مستحق'], datasets: [{label:'الديون', data: Array(3).fill(0) , backgroundColor:['rgba(255,87,34,1)' , 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)'] }] };
  AllCOmps() {
    return this.reportsService
      .allCreditorsComapnies()
      .then((data) => {
        this.allComps = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  CompDebts(ID) {
    if (ID == '') {
      this.ngOnInit();
      return;
    }
    this.Data = { labels: ['جاري التحصيل', 'مدفوع', 'مستحق'], datasets: [{ data: Array(3).fill(0) , backgroundColor:['rgba(255,87,34,1)' , 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)']}] };
    this.reportsService.DebtsReportCompanies(ID).subscribe((res: any) => {
      for (let i = 0; res.Response.DebtsReport !== undefined && i < res.Response.DebtsReport.length; i++) {
        for (let j = 0; res.Response.DebtsReport[i].AllDebts !== undefined && j < res.Response.DebtsReport[i].AllDebts.length; j++) {
          this.Data.datasets[0].data[0] += res.Response.DebtsReport[i].AllDebts[j].Pending;
          this.Data.datasets[0].data[1] += res.Response.DebtsReport[i].AllDebts[j].Payment;
          this.Data.datasets[0].data[2] += res.Response.DebtsReport[i].AllDebts[j].PaymentDue;
        }
      }
      console.log(this.Data);
    });
  }
  CompDebts2(ID) {
    if (ID == '') {
      this.ngOnInit();
      return;
    }
    this.Data2 = { labels: ['جاري التحصيل', 'مدفوع', 'مستحق'], datasets: [{label:'الديون', data: Array(3).fill(0), backgroundColor:['rgba(255,87,34,1)' , 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)'] }] };

    this.reportsService.DebtsReportCompanies(ID).subscribe((res: any) => {
      for (let i = 0; res.Response.DebtsReport !== undefined && i < res.Response.DebtsReport.length; i++) {
        for (let j = 0; res.Response.DebtsReport[i].AllDebts !== undefined && j < res.Response.DebtsReport[i].AllDebts.length; j++) {
          this.Data2.datasets[0].data[0] += res.Response.DebtsReport[i].AllDebts[j].Pending;
          this.Data2.datasets[0].data[1] += res.Response.DebtsReport[i].AllDebts[j].Payment;
          this.Data2.datasets[0].data[2] += res.Response.DebtsReport[i].AllDebts[j].PaymentDue;
        }
      }
      console.log(this.Data2);
    });
  }
  ngOnInit() {
    this.AllCOmps();
    this.reportsService.DebtsReport().subscribe((res: any) => {
      this.Data = { labels: ['جاري التحصيل', 'مدفوع', 'مستحق'], datasets: [{ data: Array(3).fill(0) , backgroundColor:['rgba(255,87,34,1)' , 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)']}] };
      for (let i = 0; res.Response.DebtsReport !== undefined && i < res.Response.DebtsReport.length; i++) {
        for (let j = 0; res.Response.DebtsReport[i].AllDebts !== undefined && j < res.Response.DebtsReport[i].AllDebts.length; j++) {
          this.Data.datasets[0].data[0] += res.Response.DebtsReport[i].AllDebts[j].Pending;
          this.Data.datasets[0].data[1] += res.Response.DebtsReport[i].AllDebts[j].Payment;
          this.Data.datasets[0].data[2] += res.Response.DebtsReport[i].AllDebts[j].PaymentDue;
        }
      }
      console.log(this.Data);
    });
    this.reportsService.DebtsReport().subscribe((res: any) => {
      this.Data2 = { labels: ['جاري التحصيل', 'مدفوع', 'مستحق'], datasets: [{label:'الديون', data: Array(3).fill(0), backgroundColor:['rgba(255,87,34,1)' , 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)'] }] };
      for (let i = 0; res.Response.DebtsReport !== undefined && i < res.Response.DebtsReport.length; i++) {
        for (let j = 0; res.Response.DebtsReport[i].AllDebts !== undefined && j < res.Response.DebtsReport[i].AllDebts.length; j++) {
          this.Data2.datasets[0].data[0] += res.Response.DebtsReport[i].AllDebts[j].Pending;
          this.Data2.datasets[0].data[1] += res.Response.DebtsReport[i].AllDebts[j].Payment;
          this.Data2.datasets [0].data[2] += res.Response.DebtsReport[i].AllDebts[j].PaymentDue;
        }
      }
      console.log(this.Data2);
    });
    

  }

}
