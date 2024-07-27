import * as net from 'net';
declare enum CONTROL_CODE {
    READ = 3,
    WRITE = 6
}
declare enum CMD {
    READ_TEMP = 0,
    SET_TEMP = 1,
    OPEN = 2,
    CLOSE = 3,
    READ_ADDR = 4
}
type Device = {
    ip: string;
    name: string;
    addr: number;
    socket?: net.Socket;
    isActive: boolean;
    cmd?: CMD;
};
export declare class AcService {
    private server;
    private devices;
    constructor();
    register(): void;
    getDevices(): Device[];
    findDeviceIdxByProprty: (value: string, proprty?: string) => number;
    findDevice(value: any, propry?: string): Device;
    updateDevice(ip: string, update: any): void;
    tcpServer(): void;
    matchAddr(ip?: string): string;
    close(addr: number): void;
    open(addr: number): void;
    high(addr: number, temp: number): void;
    down(addr: number, temp: number): void;
    getTemp(addr: number): void;
    set(addr: number, temp: number): void;
    getAddr(addr: number): void;
    send(addr: number, code: Buffer, cmd: CMD): void;
    basicCmd(addr: any, controlCode: CONTROL_CODE, start: Buffer, count: Buffer): Buffer;
    crc16(buffer: Buffer): Buffer;
}
export {};
