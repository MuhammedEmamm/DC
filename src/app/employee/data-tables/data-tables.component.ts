import { ChatService } from './../../chat.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { SignalR, SignalRConnection } from 'ng2-signalr';

@Component({
  selector: 'app-data-tables',
  providers: [EmployeeService],
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {

  emplyeeData: {
    ID: any,
    Name: any,
    Adress: any,
    UserName: any,
    Password: any,
    Job: any,
    Phone: any,
    IdentityNumber: any,
    IdentityType: any,
    Role: any,
    Status: any,
    SupervisiorID: any

  }[];
  emplyeeData1: {
    ID: any,
    Name: any,
    Adress: any,
    UserName: any,
    Password: any,
    Job: any,
    Phone: any,
    IdentityNumber: any,
    IdentityType: any,
    Role: any,
    Status: any,
    SupervisiorID: any

  }[];
  editemployeedata: {
    ID: any,
    Name: any,
    Adress: any,
    UserName: any,
    Password: any,
    Job: any,
    Phone: any,
    IdentityNumber: any,
    IdentityType: any,
    Role: any,
    Status: any,
    SupervisiorID: any
  }
  creditorData = {
    'ID': ''
  };
  formData: {
    UserID: any
  };
  allDebtors: {
    "DebtorID": any,
    "Name": any,
    "Phone": any,
    "IdentityNumber": any,
    "IdentityType": any,
    "Job": any,
    "ContructID": any,
    "checked": boolean
  }[];
  Assign: {
    UserID: any,
    DebtorsIDs: Array<any>
  };
  PerformanceReport: {
    "UserID": any,
    "DateFrom": any,
    "DateTo": any,
    "CallsCount": any,
    "BatchesCount": any,
    "DebtorsCount": any

  }
  Details: {
    ID: any,
    Name: any,
    Adress: any,
    UserName: any,
    Password: any,
    Job: any,
    Phone: any,
    IdentityNumber: any,
    IdentityType: any,
    RoleID: any,
    Status: any,
    SupervisiorID: any,
    Calls: Array<any>,
    Debtors: Array<any>
  }
  message: any;
  private _connection: SignalRConnection;

  constructor(private chat: ChatService, private Cookie: CookieService, private employeeService: EmployeeService, private appState: AppStateService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
    this.editemployeedata = {
      ID: "",
      Name: "",
      Adress: "",
      UserName: "",
      Password: "",
      Job: "",
      Phone: "",
      IdentityNumber: "",
      IdentityType: "",
      Role: "",
      SupervisiorID: "",
      Status: ""
    };
    this.emplyeeData = [{
      ID: "",
      Name: "",
      Adress: "",
      UserName: "",
      Password: "",
      Job: "",
      Phone: "",
      IdentityNumber: "",
      IdentityType: "",
      Role: "",
      SupervisiorID: "",
      Status: ""
    }];
    this.emplyeeData1 = [{
      ID: "",
      Name: "",
      Adress: "",
      UserName: "",
      Password: "",
      Job: "",
      Phone: "",
      IdentityNumber: "",
      IdentityType: "",
      Role: "",
      SupervisiorID: "",
      Status: ""
    }];
    this.PerformanceReport = {
      "UserID": "",
      "DateFrom": "",
      "DateTo": "",
      "CallsCount": "",
      "BatchesCount": "",
      "DebtorsCount": ""

    }
    this.formData = {
      UserID: ''
    };
    this.Assign = {
      UserID: "",
      DebtorsIDs: []
    };
    this.Details = {
      ID: "",
      Name: "",
      Adress: "",
      UserName: "",
      Password: "",
      Job: "",
      Phone: "",
      IdentityNumber: "",
      IdentityType: "",
      RoleID: "",
      SupervisiorID: "",
      Calls: [],
      Debtors: [],
      Status: ""
    };

  }
  name: any;
  RoleID = this.Cookie.get('RID');
  ngOnInit() {
    this.allEmployees();
    this.AllDebtors();
  }

  allEmployees() {
    return this.employeeService
      .allEmployee()
      .then((data) => {
        this.emplyeeData = data['users'];
        this.emplyeeData1 = data['users'];

        this.emplyeeData1 = this.emplyeeData1.filter(it => it['Role'].toString() !== '0') ; 

        console.log('this.emplyeeData', this.emplyeeData);
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  EditPreprocess(EmpID) {
    for (var i = 0; i < this.emplyeeData.length; i++) {
      if (this.emplyeeData[i].ID == EmpID) {
        this.editemployeedata = this.emplyeeData[i];
        console.log(this.editemployeedata, this.emplyeeData[i]);
        break;
      }
    }
  }
  updateEmployee() {
    return this.employeeService
      .editEmployee(this.editemployeedata)
      .then((data) => {
        console.log('this.emplyeeData', this.emplyeeData);
        window.location.reload();
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  deleteEmployee(employeeId) {
    this.creditorData['ID'] = employeeId;
    return this.employeeService
      .deleteEmployee(this.creditorData)
      .then((data) => {
        if (data['isSuccess'] == true) {
          this.toastr.success('لقد تم حذف الموظف');
          this.allEmployees();

        }
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
  performanceReport(ID) {
    this.formData.UserID = ID;
    return this.employeeService
      .performanceReport(this.formData)
      .then((data) => {
        this.PerformanceReport = data['PerformanceReport'];
        console.log('PerRep', this.PerformanceReport);
      })
      .catch(res => console.log('res', res))
      .then(() => { });


  }
  AllDebtors() {
    return this.employeeService
      .AllDebtors()
      .then((data) => {
        this.allDebtors = data['Debtors'];
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  UserID: any;
  getUserID(ID) {
    for (var i = 0; this.allDebtors != undefined && i < this.allDebtors.length; i++) {
      this.allDebtors[i].checked = false;
    }
    this.UserID = ID;
  }
  AssignDebtors() {
    console.log(this.allDebtors);
    this.Assign.UserID = this.UserID;
    for (var i = 0; this.allDebtors != undefined && i < this.allDebtors.length; i++) {
      if (this.allDebtors[i].checked) {
        this.Assign.DebtorsIDs.push(this.allDebtors[i].DebtorID);
      }
    }
    return this.employeeService
      .AssignDeb(this.Assign)
      .then((data) => {
        this.toastr.success('لقد تم التعيين بنجاح');
        window.location.reload();
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  GetEmpDetails(ID) {
    return this.employeeService
      .DetEmployee({ "ID": ID })
      .then((data) => {
        this.Details = data['User'];
        console.log('this.emplyeeData', this.Details);
      })
      .catch(res => console.log('res', res))
      .then(() => { });
  }
}
