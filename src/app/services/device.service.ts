import { Injectable } from '@angular/core';
import { Device } from 'src/data/device';
import data from '../../data/deviceData.json';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor() { }

  /**
   * Gets all Devices from DB
   */
  getDevices(): Device[] {
    if (!data.devices) {
      throw Error('No Data found');
    } else {
      const devices: Device[] = [];
      data.devices.forEach(element => {
        // Unpack:
        const json = element.device;
        const nextDevice: Device = {
          serialNr: json.serialNr, soc: Number.parseFloat(json.SoC),
          cycles: Number.parseInt(json.Cycles), lastSeen: new Date(json.lastSeen)
        };
        devices.push(nextDevice);
      });

      return this.sortDevicesByBatteryLevel(devices);
    }
  }

  /**
   * Finds a device by its serialNumber
   * @param serialNumber the serialnumber of the device
   */
  getDeviceBySerialNumber(serialNumber: string): Device {
    const devices = this.getDevices();
    return devices.find(element => element.serialNr === serialNumber);
  }

  sortDevicesByBatteryLevel(devices: Device[]): Device[] {
    return devices.sort((a: Device, b: Device) => {
      if (a.soc < b.soc) {
        return -1;
      }
      if (a.soc > b.soc) {
        return 1;
      }
      // Equal:
      return 0;
    });
  }
}
