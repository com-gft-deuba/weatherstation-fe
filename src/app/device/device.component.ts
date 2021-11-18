import { Component, Input } from '@angular/core';

import { Device, deviceConfiguration, emptyDevice } from '../models/device';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass']
})
export class DeviceComponent {

  device: Device =  emptyDevice();
  @Input() deviceType: string = "";

  constructor(deviceService: DeviceService) { 
    this.device = deviceService.getDevice();
  }

  getIcon() {
    return "device_thermostat"
  }

}
