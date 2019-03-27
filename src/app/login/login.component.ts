import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private toastr: ToastrService, private router: Router, private Cookie: CookieService) {
    if (this.Cookie.get('FT') != 'false') {
      if (this.Cookie.get('UID') && this.Cookie.get('RID') !== '0')
        this.router.navigateByUrl('/data-table');

      else if (this.Cookie.get('UID') && this.Cookie.get('RID') === '0')
        this.router.navigateByUrl('/all-debtors');

    }
    else {
      this.router.navigateByUrl('/reset-password');

    }


  }

  submissionErrors?: object;
  inProgress = false;

  formData: {
    email: any,
    password: any,
    Password: any,
    UserName: any

  } = {
      email: "",
      password: "",
      Password: "",
      UserName: ""
    };

  Details: {
    UserName: any, Password: any
  } = {
      UserName: '',
      Password: ''
    };

  onSubmit() {
    this.inProgress = true;
    this.submissionErrors = null;
    return this.authService
      .login(this.formData)
      .then((data) => {
        if (data['isSuccess'] == true) {
          this.toastr.success('لقد تم تسجيل الدخول');
          if (this.Cookie.get('FT') != 'false') {

            if (this.Cookie.get('RID') !== '0')
              this.router.navigateByUrl('/data-table');
            else
              this.router.navigateByUrl('/all-debtors');

          }
          else {
            this.router.navigateByUrl('/reset-password');

          }
        } else if (data['errorMessage']) {
          this.submissionErrors = data['errorMessage'];
        }
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(res => this.inProgress = false)
  }
  ChangePassword() {
    this.authService.resetpassword(this.Details).subscribe((res: any) => {
      if (res.isSuccess) {
        this.toastr.success('تم تغيير كلمة المرور بنجاح');
        window.location.reload();
      }
    });
  }



}
