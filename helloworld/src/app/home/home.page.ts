import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

const { Device, Camera } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  deviceInfo: object;
  imageUrl: SafeResourceUrl;

  name: string;
  version: string;

  constructor(private domSanitizer: DomSanitizer,private appVersion: AppVersion) {}

  ngOnInit() {
    Device.getInfo().then((object) => {
      this.deviceInfo = object;
    });

    this.appVersion.getAppName().then((result) => {
      this.name = result;
    });
    this.appVersion.getVersionNumber().then((result) => {
      this.version = result;
    });
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl,
    });

    this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(image && image.dataUrl);
  }
}
