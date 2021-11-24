import { environment } from "src/environments/environment";

export enum DeviceType {
    THERMOMETER = "thermometer"
}

export enum DeviceUnit {
    CELCIUS = "C"
}

export enum DeviceStatus {
    OK = "OK",
    NOK = "NOK"
}

export interface Device {
    host: string,
    port: number,
    status: string,
    name: string,
    hostname: string,
    version: string,
    type: DeviceType,
    address: string,
    unit: DeviceUnit,
    raw: number,
    formatted: string,
    stamp: Date,
    rnrSvcVersion: string,
    rnrSvcName: string
}

export interface DeviceInfo {
    host: string,
    port: number,
    status: DeviceStatus,
    name: string,
    hostname: string,
    version: string
}

export interface DeviceConfiguration {
    type: DeviceType,
    properties: DeviceProperties
}

export interface DeviceProperties {
    url: string,
    measure: string,
    info: string,
    mocked: boolean,
    icon: string
}

export const deviceConfiguration: DeviceConfiguration [] = [
    {
        type: DeviceType.THERMOMETER,
        properties: {
            url: environment.url,
            measure: "measure",
            info: "info",
            mocked: false,
            icon: "device_thermostat" 
        }
    }
]