import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/data/device';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/**
 * Würde man in Produktion in verschiedene Komponenten unterteilen und hier anzeigen
 */
export class DashboardComponent implements OnInit {
  devices: Device[];
  constructor(private deviceService: DeviceService, private router: Router) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  navigateDetails(serialNumber: string) {
    this.router.navigateByUrl(`/devices/details/${serialNumber}`);
  }

}
