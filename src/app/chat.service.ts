import { CookieService } from 'ngx-cookie-service';
import { Resolve } from '@angular/router';
import { SignalR, SignalRConnection, ISignalRConnection, IConnectionOptions } from 'ng2-signalr';
import { Injectable } from '@angular/core';

@Injectable()


export class ChatService implements Resolve<ISignalRConnection> {

  options: IConnectionOptions = { hubName: 'signalRChatHub' };

  constructor(private _signalR: SignalR) {
    //       this._signalR.connect(this.options).then((c) => this.ngzone.run(() => {
    //   console.log(c);
    //   this.connection = c;
    //   console.log(this.connection);
    //   c.invoke('connect', this.Cookie.get('UID'), c.id).catch(err => console.error(err));
    // }));

  }

  resolve() {
    console.log('ConnectionResolver. Resolving...');
    return this._signalR.connect(this.options);
  }
  // Send() {
  //   // this.connection.invoke('send', 5, 23, "Hi Emamm this is hassan").catch(err => console.error(err));
  //   // this.connection.listenForRaw('appendNewMessage').subscribe((uid: any) => {
  //   //   console.log(uid);
  //   // });

  // }




}
