export enum DeviceType {
    EMPTY = " ",
    THERMOMETER = "thermometer"
}

enum DeviceUnit {
    EMPTY = " ",
    CELCIUS = "C"
}

enum DeviceStatus {
    EMPTY = " ",
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

interface DeviceConfiguration {
    type: DeviceType,
    properties: DeviceProperties
}

interface DeviceProperties {
    endpoint: string,
    mocked: boolean,
    icon: string
}

export const deviceConfiguration: DeviceConfiguration [] = [
    {
        type: DeviceType.THERMOMETER,
        properties: {
            endpoint: "v1/thermometer/measure", 
            mocked: true,
            icon: "device_thermostat" 
        }
    }
]

export const mockedThermometer: Device = {
    host: "0.0.0.0",
    port: 8080,
    status: "'1.0.0' @ '01:00'. reported value '1.08C' with rnrsrc 'random-1@1.0.0'.",
    name: "thermometer-1",
    hostname: "thermometer-1",
    version: "1.0.0",
    type: "thermometer" as DeviceType,
    address: "01:00",
    unit: "C" as DeviceUnit,
    raw: 108,
    formatted: "1.08C",
    stamp: new Date("2021-11-17T10:57:35.1547188Z"),
    rnrSvcVersion: "1.0.0",
    rnrSvcName: "random-1"
}

export const mockedThermometerInfo: DeviceInfo = {
    host: "0.0.0.0",
    port: 8080,
    status: "OK" as DeviceStatus,
    name: "thermometer-1",
    hostname: "thermometer-1",
    version: "1.0.0"
}

export function emptyDevice(): Device {
    return {
        host: "",
        port: 0,
        status: "",
        name: "",
        hostname: "",
        version: "",
        type: DeviceType.EMPTY,
        address: "",
        unit: DeviceUnit.EMPTY,
        raw: 0,
        formatted: "",
        stamp: new Date(),
        rnrSvcVersion: "",
        rnrSvcName: ""
    }
}