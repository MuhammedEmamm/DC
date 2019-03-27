import { ChatService } from './chat.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, Route } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service'
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  providers: [EmployeeService, ChatService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  isLoginpage: boolean;
  message: any;
  Notfications: {
    "ID": any,
    "NotificationFrom": any,
    "NotificationTo": any,
    "NotificationUserID": any,
    "Date": any,
    "MessageContent": any
  }[];
  Loggedin: any;
  constructor(private idle: Idle, private keepalive: Keepalive, public router: Router, private Cookie: CookieService, private employeeService: EmployeeService, private chat: ChatService ,  private el: ElementRef) {

    router.events.subscribe(() => {
      this.isLoginpage = location.pathname === '/login';
    });
    //this.chat.Send()
    if (this.Cookie.get('UID'))
      this.Loggedin = true;
    else
      this.Loggedin = false;


  }
  counter = 0;
  submissionErrors?: object;
  inProgress = false;
  title = 'app';
  ngOnInit() {

  }
}
