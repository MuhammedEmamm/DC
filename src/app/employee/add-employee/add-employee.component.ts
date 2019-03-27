import { Component } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { AppStateKey } from '../../../interface/app-state.interface';
import { AppStateService } from '../../../service/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  providers: [EmployeeService],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService, private appState: AppStateService, private router: Router) {
    this.formData = {
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
    }
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
    this.allEmployees();
  }
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
  submissionErrors?: object;
  inProgress = false;
  formData: {
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
  };
  allEmployees() {
    return this.employeeService
      .allEmployee()
      .then((data) => {
        this.emplyeeData = data['users'];
        this.emplyeeData = this.emplyeeData.filter(it => it['Role'].toString() !== '0') ; 
        console.log('this.emplyeeData', this.emplyeeData);
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  onSubmit() {
    this.inProgress = true;
    this.submissionErrors = null;

    return this.employeeService
      .addEmployee(this.formData)
      .then((res) => {
        if (res['isSuccess'] == true) {
          this.toastr.success('لقد تم اضافه الموظف');
          this.router.navigateByUrl('/data-table');
        } else if (res['errorMessage']) {
          this.submissionErrors = res['errorMessage'];
        }
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(() => this.inProgress = false);
  }
}

