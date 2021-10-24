import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  async getDeviceInfo() {

    try {

      let device_info = await Device.getInfo();
      let device_id = await Device.getId();

      return {
        device_info: device_info,
        device_id: device_id.uuid,
      };

    } catch( ex ) {
      return ex;
    }
  }
}
