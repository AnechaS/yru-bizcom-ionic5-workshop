import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

const { Device, Camera } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  deviceInfo = {};

  imageUrl: string;

  constructor(
    private appVersion: AppVersion,
    private geolocation: Geolocation,
    private batteryStatus: BatteryStatus,
    private callNumber: CallNumber
  ) {}

  ngOnInit() {
    Device.getInfo().then((object) => {
      this.deviceInfo = object;
    });

    this.appVersion.getAppName().then((val) => {
      console.log('app name');
      console.log(val);
    });

    this.appVersion.getVersionNumber().then((val) => {
      console.log('app version');
      console.log(val);
    });

    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log('latitude');
        console.log(resp.coords.latitude);
        // resp.coords.longitude
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    this.batteryStatus.onChange().subscribe((status) => {
      console.log('status.level');
      console.log(status.level);
      console.log(status.isPlugged);
    });

    this.callNumber
      .callNumber('18001010101', true)
      .then((res) => console.log('Launched dialer!', res))
      .catch((err) => console.log('Error launching dialer', err));
  }

  async takePicture() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    this.imageUrl = capturedPhoto.webPath;
  }
}
