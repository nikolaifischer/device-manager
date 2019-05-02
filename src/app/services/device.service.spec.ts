import { TestBed } from '@angular/core/testing';

import { DeviceService } from './device.service';
import { Device } from 'src/data/device';
describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => service = new DeviceService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load a list of devices', () => {
    const devices = service.getDevices();
    expect(devices).toBeDefined();
  });
  it('should load the correct first devices sorted by battery level', () => {
    const devices = service.getDevices();
    const expected = {serialNr: 'M2MR101000020', soc: 6.51, cycles: 2500, lastSeen: new Date('2019-03-29T12:24:21+02:00')};
    expect(devices[0]).toEqual(expected);
  });

  it('should return the correct device when filtered by serialnumber', () => {
    const device = service.getDeviceBySerialNumber('M2MR101000020');
    const expected = {serialNr: 'M2MR101000020', soc: 6.51, cycles: 2500, lastSeen: new Date('2019-03-29T12:24:21+02:00')};
    expect(device).toEqual(expected);
  });
});
