import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  providers: [AuthenticationService],

  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthenticationService, private toastr: ToastrService, private router: Router, private Cookie: CookieService) {
  }

  submissionErrors?: object;
  inProgress = false;

  formData: {
    UserName: any
    Password: any,

  } = {
      Password: "",
      UserName: ""
    };
  onSubmit() {
    this.inProgress = true;
    this.submissionErrors = null;
    return this.authService
      .resetpassword(this.formData).subscribe((res: any) => {
        if (res.isSuccess) {

          this.toastr.success('تم تغيير كلمة المرور بنجاح');

          if (this.Cookie.get('UID') && this.Cookie.get('RID') !== '0')
            this.router.navigateByUrl('/data-table');

          else if (this.Cookie.get('UID') && this.Cookie.get('RID') === '0')
            this.router.navigateByUrl('/all-debtors');

        }

      });
  }

  ngOnInit() {
  }

}
