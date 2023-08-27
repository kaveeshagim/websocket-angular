import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Pusher from 'pusher-js';
// const Pusher = require('pusher-js');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketService } from './web-socket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [WebsocketService,  { provide: 'Pusher', useValue: Pusher },],
  bootstrap: [AppComponent]
})
export class AppModule { }

