// app.component.ts
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: string[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.listenToEvent('trades', 'NewTrade', (tradeData: string) => {
      console.log('Trade data received:', tradeData);
      this.messages.push(tradeData);
    });
  }
}
