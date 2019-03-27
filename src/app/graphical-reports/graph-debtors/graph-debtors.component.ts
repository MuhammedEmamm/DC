import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../service/reports.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-debtors',
  providers: [ReportsService],
  templateUrl: './graph-debtors.component.html',
  styleUrls: ['./graph-debtors.component.css']
})
export class GraphDebtorsComponent implements OnInit {
  Data1: { labels: any[], datasets: { label: any, data: any[] }[] } = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Debts', data: Array(12).fill(0) }]
  };
  Data: {
    labels: any[],
    datasets: { data: any[], backgroundColor: any[] }[]
  } = { labels: ['تم السداد', 'وعد بالسداد', 'متوفي', 'لم يرد'], datasets: [{ data: Array(4).fill(0), backgroundColor: ['rgba(255,87,34,1)', 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)', 'rgba(33 , 50 , 243 ,1)'] }] };

  type2 = 'line';
  type1 = 'pie';

  date1: any = '';
  CompanyID: any = '';
  CompanyID1: any = '';
  allComps: { "CompanyName": any, "CompanyID" }[] = [];
  options = {
    responsive: true,
    maintainAspectRatio: true
  };
  constructor(private Cookie: CookieService, private reportsService: ReportsService, private toastr: ToastrService, private router: Router) { }
  AllCOmps() {
    return this.reportsService
      .allCreditorsComapnies()
      .then((data) => {
        this.allComps = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  CollectByCompanyFilter(ID) {

    if (ID === '') {
      this.ngOnInit();
      return;
    }
    this.reportsService.CompanyDebtReport(ID).subscribe((res: any) => {
      if (res.isSuccess) {
        this.Data1 = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Debts', data: Array(12).fill(0) }]
        };
        for (let i = 0; res.Response.CompaniesReport !== undefined && i < res.Response.CompaniesReport.length; i++) {
          for (let j = 0; res.Response.CompaniesReport[i].AllDebts !== undefined && j < res.Response.CompaniesReport[i].AllDebts.length; j++) {
            this.Data1.datasets[0].data[j] += res.Response.CollectionsReport[i].AllDebts[j].Collection;
          }
        }

        console.log(this.Data1);
      }

    });
  }
  CollectByCompany(ID, date) {

    if (date === '') {
      return;
    }
    else if (ID === '') {
      this.reportsService.CallStatusReport(date).subscribe((res: any) => {
        if (res.isSuccess) {
          this.Data = {
            labels: ['لم يرد', 'متوفي', 'وعد بالسداد', 'تم السداد'], datasets: [{ data: Array(4).fill(0), backgroundColor: ['rgba(255,87,34,1)', 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)', 'rgba(33 , 50 , 243 ,1)'] }]
          };
          for (let i = 0; res.Response.CallsStatus !== undefined && i < res.Response.CallsStatus.length; i++) {
            for (let j = 0; res.Response.CallsStatus[i].StatusList !== undefined && j < res.Response.CallsStatus[i].StatusList.length; j++) {
              if (res.Response.CallsStatus[i].StatusList[j].Status == '1')
                this.Data.datasets[0].data[0] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;
              if (res.Response.CallsStatus[i].StatusList[j].Status == '7')
                this.Data.datasets[0].data[1] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;
              if (res.Response.CallsStatus[i].StatusList[j].Status == '6')
                this.Data.datasets[0].data[2] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;
              if (res.Response.CallsStatus[i].StatusList[j].Status == '3')
                this.Data.datasets[0].data[3] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;

            }
          }
          console.log(this.Data);
        }


      });

    }
    else {
      this.reportsService.CallStatusReportCompany(date, ID).subscribe((res: any) => {
        if (res.isSuccess) {
          this.Data = {
            labels: ['لم يرد', 'متوفي', 'وعد بالسداد', 'تم السداد'], datasets: [{ data: Array(4).fill(0), backgroundColor: ['rgba(255,87,34,1)', 'rgba(0,188,212,1)', 'rgba(33 , 150 , 243 ,1)', 'rgba(33 , 50 , 243 ,1)'] }]
          };
          for (let i = 0; res.Response.CallsStatus !== undefined && i < res.Response.CallsStatus.length; i++) {
            for (let j = 0; res.Response.CallsStatus[i].StatusList !== undefined && j < res.Response.CallsStatus[i].StatusList.length; j++) {
              if (res.Response.CallsStatus[i].StatusList[j].Status == '1')
                this.Data.datasets[0].data[0] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;
              if (res.Response.CallsStatus[i].StatusList[j].Status == '7')
                this.Data.datasets[0].data[1] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;
              if (res.Response.CallsStatus[i].StatusList[j].Status == '6')
                this.Data.datasets[0].data[2] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;
              if (res.Response.CallsStatus[i].StatusList[j].Status == '3')
                this.Data.datasets[0].data[3] += res.Response.CallsStatus[i].StatusList[j].NUmberOfCalls;

            }
          }
          console.log(this.Data);
        }


      });

    }


  }
  ngOnInit() {
    this.AllCOmps();

    this.reportsService.CompanyDebtReportAll().subscribe((res: any) => {
      if (res.isSuccess) {
        this.Data1 = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], datasets: [{ label: 'Debts', data: Array(12).fill(0) }]
        };
        for (let i = 0; res.Response.CompaniesReport !== undefined && i < res.Response.CompaniesReport.length; i++) {
          for (let j = 0; res.Response.CompaniesReport[i].AllDebts !== undefined && j < res.Response.CompaniesReport[i].AllDebts.length; j++) {
            this.Data1.datasets[0].data[j] += res.Response.CompaniesReport[i].AllDebts[j].Collection;
          }
        }

        console.log(this.Data1);
      }

    });
  }


}
