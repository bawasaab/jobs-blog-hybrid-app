import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkConnectedService {

  isConnected: boolean;
  public isConnected$ = new Subject();

  constructor() {
    this.isConnected$.asObservable();
    Network.addListener('networkStatusChange', status => {
			this.isConnected = status.connected;
      this.checkConnection();
		});
  }

  checkConnection() {
    this.isConnected$.next(this.isConnected);
  }  
}
