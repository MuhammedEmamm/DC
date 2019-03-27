import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-collection2',
  providers: [DebtorsService],
  templateUrl: './collection2.component.html',
  styleUrls: ['./collection2.component.css']
})
export class DebtorCollectionComponent implements OnInit {

  constructor(private debtorsService: DebtorsService, private Cookie: CookieService) {
    this.debtorsCollection = [{
      ContrucID: "",
      ContructName: "",
      ID: "",
      EmployeeName: "",
      DebtorName: "",
      CompanyName: "",
      Mony: "",
      Status: "",
      Attachment: ""
    }];
    this.creditorsComapnies = [{
      "CompanyID": '',
      "CompanyName": '',
      "CompanyCode": ''
    }];
  }
  creditorsComapnies: {
    "CompanyID": any,
    "CompanyName": any,
    "CompanyCode": any
  }[]; name: any;
  compname: any;

  debtorsCollection: {
    ContrucID: any,
    ContructName: any,
    ID: any,
    EmployeeName: any,
    DebtorName: any,
    CompanyName: any,
    Mony: any,
    Status: any,
    Attachment: any
  }[];
  SupName : any  ; 

  AllComp() {
    return this.debtorsService
      .allCreditorsComapnies()
      .then((data) => {
        this.creditorsComapnies = data['Compaines'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  ngOnInit() {
    this.AllComp();
    return this.debtorsService
      .debtorsCollection(this.Cookie.get('UID'))
      .then((data) => {
        this.debtorsCollection = data['Collection'];
        this.SupName = data['SupervisiorName'] ; 

      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
