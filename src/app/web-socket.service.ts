// web-socket.service.ts
import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  echo!: Echo;

  constructor() {
    try {
      console.log("Pusher Service");
      this.echo = new Echo({
        broadcaster: 'pusher',
        key: '12345',
        cluster: 'eu',
        encrypted: false, 
        wsHost: window.location.hostname,
        wsPort: 6001,
        enabledTransports: ['ws'],
        forceTLS: false,
      });
      console.log("Echo instance created successfully");
    } catch (error) {
      console.error('Error initializing WebSocket:', error);
    }
  }

  listenToEvent(channelName: string, eventName: string, callback: (event: any) => void) {
    try {
      console.log(`Listening to channel ${channelName} for event ${eventName}`);
      this.echo.channel(channelName)
        .listen(eventName, (event: any) => {
          console.log('WebSocket event received:', event);
  
          // Call the callback function with the extracted trade data
          callback(event.trade); // Assuming that 'trade' is a property of the received event
        });
    } catch (error) {
      console.error('Error listening to WebSocket event:', error);
    }
  }
  
}
