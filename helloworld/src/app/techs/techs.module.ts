import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechsPageRoutingModule } from './techs-routing.module';

import { TechsPage } from './techs.page';
import { TechDetailPage } from './tech-detail/tech-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechsPageRoutingModule
  ],
  declarations: [TechsPage, TechDetailPage]
})
export class TechsPageModule {}
