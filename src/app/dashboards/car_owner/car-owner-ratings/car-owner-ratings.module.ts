import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarOwnerRatingsPageRoutingModule } from './car-owner-ratings-routing.module';

import { CarOwnerRatingsPage } from './car-owner-ratings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarOwnerRatingsPageRoutingModule
  ],
  declarations: [CarOwnerRatingsPage]
})
export class CarOwnerRatingsPageModule {}
