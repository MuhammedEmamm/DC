import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from '../../service/employee.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-side-bar',
  providers: [EmployeeService],

  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  Details1: {
    UserName: any, Password: any
  } = {
      UserName: '',
      Password: ''
    };

  constructor(private idle: Idle, private keepalive: Keepalive, private authService: AuthenticationService, private toastr: ToastrService, private router: Router, private Cookie: CookieService, private employeeService: EmployeeService) {
    this.AllUserData = {
      Adress: "",
      ID: "",
      IdentityNumber: "",
      IdentityType: "",
      Job: "",
      Name: "",
      Phone: "",
      RoleID: "",
      Status: "",
      SupervisiorID: ""
    };

    this.AllUserData.ID = this.Cookie.get('UID');
    this.AllUserData.RoleID = this.Cookie.get('RID');
    this.AllUserData.Name = this.Cookie.get('Name');
    console.log(this.AllUserData);
    this.Notfications = [];
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(1800);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
    });
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.logOut();
    });
    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
    });
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
      console.log(this.idleState);
      this.toastr.warning(this.idleState);

    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.reset();

  }
  AllUserData: {
    Adress: any
    ID: any
    IdentityNumber: any
    IdentityType: any
    Job: any
    Name: any
    Phone: any
    RoleID: any
    Status: any
    SupervisiorID: any

  };
  counter = 0;
  counterOld = 0;

  submissionErrors?: object;
  inProgress = false;
  Notfications: {
    "ID": any,
    "NotificationFrom": any,
    "NotificationTo": any,
    "NotificationUserID": any,
    "Date": any,
    "MessageContent": any,
    "IsRead": any,

  }[];

  logOut() {
    this.Cookie.deleteAll();
    this.toastr.success('لقد تم الخروج');
    window.location.reload();
    this.router.navigateByUrl('/');
    this.AllUserData = {
      Adress: "",
      ID: "",
      IdentityNumber: "",
      IdentityType: "",
      Job: "",
      Name: "",
      Phone: "",
      RoleID: "",
      Status: "",
      SupervisiorID: ""
    }
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "/DCFrontEnd/assets/definite.mp3";
    audio.load();
    audio.play();
  }
  Not() {
    return this.employeeService

      .Notif(this.Cookie.get('UID'))
      .then((res) => {
        this.Notfications = res['Notifications'];
        this.counter = 0;
        for (var i = 0; this.Notfications !== undefined && i < this.Notfications.length; i++) {
          if (!this.Notfications[i].IsRead) {
            this.counter++;
          }
        }
        if (this.counterOld < this.counter) {
          console.log("new Notification");
          this.playAudio();
          this.counterOld = this.counter;
        }
      })
      .catch(res => this.submissionErrors = res.errorMessage)
      .then(() => this.inProgress = false);
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  ChangePassword() {
    this.authService.resetpassword(this.Details1).subscribe((res: any) => {
      if (res.isSuccess) {
        this.toastr.success('تم تغيير كلمة المرور بنجاح');
        window.location.reload();
      }
    });
  }
  

  ngOnInit() {
    if (this.Cookie.get('UID'))
      setInterval(() => { this.Not() }, 3000);
  }

}
