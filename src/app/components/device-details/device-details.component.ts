import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/data/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;

  constructor( private route: ActivatedRoute, private deviceService: DeviceService, private router: Router) { }

  ngOnInit() {
    this.loadDeviceDetails();
  }


  loadDeviceDetails() {
    this.route.params.subscribe(params => {
      const serialNumber = params['id'];
      this.device = this.deviceService.getDeviceBySerialNumber(serialNumber);
      console.log(this.device);
    });
  }

  onBack(){
    this.router.navigateByUrl(`/`);
  }
}
