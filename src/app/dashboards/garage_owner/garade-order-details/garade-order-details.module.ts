import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaradeOrderDetailsPageRoutingModule } from './garade-order-details-routing.module';

import { GaradeOrderDetailsPage } from './garade-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaradeOrderDetailsPageRoutingModule
  ],
  declarations: [GaradeOrderDetailsPage]
})
export class GaradeOrderDetailsPageModule {}
