import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import { ChatService } from './../chat.service';
import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector: 'app-chat',
  providers: [EmployeeService, ChatService],

  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private _connection: SignalRConnection;
  ChatMessages: {
    "ID": any,
    "UserFromName": any,
    "UserToName": any,
    "Message": any,
    "Date": any,
    "UserFromID": any
  }[]
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
    Role: any,
    Status: any,
    SupervisiorID: any

  };
  Msg: any;
  constructor(private chat: ChatService, private Cookie: CookieService, private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
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
    this.ChatMessages = [{
      "ID": "",
      "UserFromName": "",
      "UserToName": "",
      "Message": "",
      "Date": "",
      "UserFromID": ""
    }];
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
      Role: "",
      SupervisiorID: "",
      Status: ""
    };


  }
  ii: any = this.Cookie.get('UID');
  allEmployees() {
    return this.employeeService
      .allEmployee()
      .then((data) => {
        this.emplyeeData = data['users'];
        this.emplyeeData = this.emplyeeData.filter(it => it['ID'].toString() !== this.Cookie.get('UID').toString());
        console.log('this.emplyeeData', this.emplyeeData);
      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  ChatMessagesreceivied(from, to) {
    return this.employeeService
      .ChatMsgs(from, to)
      .then((data) => {
        this.ChatMessages = data['Messages'];
        console.log('this.ChatMessages', this.ChatMessages);

      })
      .catch(res => console.log('res', res))
      .then(() => { });

  }
  ChooseEmp(ID) {
    this.Details = this.emplyeeData.filter(it => it['ID'] === ID)[0];
    console.log(this.Details);
    this.ChatMessagesreceivied(this.Cookie.get('UID'), ID);
  }
  Send(ToID, Msg) {
    this._connection.invoke('send', this.Cookie.get('UID'), ToID, Msg);
    this.ChatMessagesreceivied(this.Cookie.get('UID'), ToID);

    this.Msg = "";
  }

  ngOnInit() {
    this.allEmployees();
    this._connection = this.route.snapshot.data['connection'];
    this._connection.invoke('connect', this.Cookie.get('UID'), this._connection.id).catch(err => console.error(err));
    console.log(this._connection);
    this._connection.listenForRaw('appendNewMessage').subscribe((uid: any) => {
      console.log(uid);
      this.ChatMessages.push(uid[0]);
    });
  }


}
