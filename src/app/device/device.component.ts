import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';

import { Device, DeviceConfiguration, deviceConfiguration, DeviceInfo } from '../models/device';
import { DeviceService } from '../services/device.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.sass']
})
export class DeviceComponent implements OnInit, OnDestroy {

  device: Device | undefined;
  deviceInfo: DeviceInfo | undefined;
  config: DeviceConfiguration | undefined;
  subscription: Subscription | undefined;
  @Input() deviceType: string | undefined;

  constructor(private deviceService: DeviceService, private urlConfig: ConfigService) { };

  ngOnInit(): void {
    this.config = deviceConfiguration.find(
      device => device.type === this.deviceType
    );
    this.getDevice();
    const source = interval(1000);
    this.subscription = source.subscribe(
      () => this.getDevice()
    );
    console.log('URL config', this.urlConfig.config);
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  getDevice(): void {
      if (this.config !== undefined) {
      // this.deviceService.getDevice(this.config.properties.url + this.config.properties.measure).subscribe(
      this.deviceService.getDevice(this.urlConfig.config.url + this.config.properties.measure).subscribe(
        (data: Device) => this.device = { ...data}
      );
    }
  }

  getDeviceInfo(): void {
    if (this.config !== undefined) {
      // this.deviceService.getDeviceInfo(this.config.properties.url + this.config.properties.info).subscribe(
      this.deviceService.getDeviceInfo(this.urlConfig.config.url + this.config.properties.info).subscribe(
          (data: DeviceInfo) => this.deviceInfo = { ...data}
      );
    }
  }

  getIcon(): string {
    return (this.config !== undefined) ? this.config.properties.icon : "device_unknown";
  }

}
