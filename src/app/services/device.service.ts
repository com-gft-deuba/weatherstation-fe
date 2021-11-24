import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Device, DeviceInfo } from '../models/device';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getDevice(url: string): Observable<Device> {
    return this.http.get<Device>(url);
  }

  getDeviceInfo(url: string): Observable<DeviceInfo> {
    return this.http.get<DeviceInfo>(url);
  }
}
