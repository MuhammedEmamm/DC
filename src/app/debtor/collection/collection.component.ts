import { Component, OnInit } from '@angular/core';
import { DebtorsService } from '../../../service/debtors.service';
import { CookieService } from 'ngx-cookie-service';
let input: FormData = new FormData();

@Component({
  selector: 'app-collection',
  providers: [DebtorsService],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CompanyCollectionComponent implements OnInit {

  constructor(private debtorsService: DebtorsService, private Cookie: CookieService) {
    this.companyCollection = [{
      ContrucID: "",
      ContructName: "",
      ID: "",
      SupervisiorID: "",
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
    this.debtorsPayment = [{
      Date: "",
      ID: "",
      Mony: "",
      Notes: "",
      StatusType: "",
    }];
    this.Data = [{
      "UserID": '',
      "DebtID": '',
      "DebtorID": '',
      "ContructID": '',
      "Name": '',
      "Phone": '',
      "Job": '',
      "IdentityNumber": '',
      "IdentityType": '',
      "UserName": '',
      "ContructName": ''
    }];


  }
  Data: {
    "UserID": any,
    "DebtID": any,
    "DebtorID": any,
    "ContructID": any,
    "Name": any,
    "Phone": any,
    "Job": any,
    "IdentityNumber": any,
    "IdentityType": any,
    "UserName": any,
    "ContructName": any
  }[];
  name: any;
  creditorsComapnies: {
    "CompanyID": any,
    "CompanyName": any,
    "CompanyCode": any
  }[];
  debtorsPayment: {
    Date: any,
    ID: any,
    Mony: any
    Notes: any,
    StatusType: any
  }[];
  formData = {
    'debtorID': ''
  };
  compname: any;
  companyCollection: {
    ContrucID: any,
    ContructName: any,
    ID: any,
    SupervisiorID: any,
    EmployeeName: any,
    DebtorName: any,
    CompanyName: any,
    Mony: any,
    Status: any,
    Attachment: any
  }[];
  EmpID: any;
  RoleID = this.Cookie.get('RID');
  SupName: any;
  allEmployees(Name) {
    return this.debtorsService
      .AllDebtors()
      .then((data) => {
        this.Data = data['Debtors'];
        console.log('this.Data', this.Data);
        for (var i = 0; this.Data != undefined && i < this.Data.length; i++) {
          if (Name === this.Data[i].Name) {
            this.EmpID = this.Data[i].DebtorID;
            this.allpayments(this.EmpID);
          }
        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  allpayments(ID) {
    this.formData['debtorID'] = ID;
    return this.debtorsService
      .debtorsPayment(this.formData)
      .then((data) => {
        this.debtorsPayment = data['Batches'];
        console.log(this.debtorsPayment);
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  Accept(ID, Name) {
    input = new FormData();
    var a = 2;
    input.append("BatchID", ID);
    input.append("Status", a.toString());

    return this.debtorsService
      .editPayment(input)
      .then((data) => {
        if (data['isSuccess'] == true) {
          window.location.reload();
        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  Reject(ID, Name) {
    input = new FormData();
    var a = 3;
    input.append("BatchID", ID);
    input.append("Status", a.toString());

    return this.debtorsService
      .editPayment(input)
      .then((data) => {
        if (data['isSuccess'] == true) {
          window.location.reload();
        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
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
      .companyCollection(this.Cookie.get('UID'))
      .then((data) => {
        this.companyCollection = data['Collection'];
        this.SupName = data['SupervisiorName'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }

}
