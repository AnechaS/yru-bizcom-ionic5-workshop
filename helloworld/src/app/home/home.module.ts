import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [
    AppVersion,
    Geolocation,
    BatteryStatus,
    CallNumber
  ]
})
export class HomePageModule {}
