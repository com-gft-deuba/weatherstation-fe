import { Injectable } from '@angular/core';

import { Device, DeviceInfo, DeviceType } from '../models/device';
import { mockedThermometer, mockedThermometerInfo } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  getDevice() {
    return mockedThermometer;
  }

  getDeviceInfo() {
    return mockedThermometerInfo;
  }
}
