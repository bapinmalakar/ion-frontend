import { Component, OnInit } from '@angular/core';
import * as Socket from 'socket.io-client';
import { CommonStorageService } from './services/commond_storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ion-frontend';
  socket: any = null;

  constructor(private _commonStorage: CommonStorageService) { }

  ngOnInit() {
    console.log('Socket connection called');
    this.connectToSocket();
  }

  connectToSocket() {
    this._commonStorage.socket = Socket(this._commonStorage.root);
  }
}

