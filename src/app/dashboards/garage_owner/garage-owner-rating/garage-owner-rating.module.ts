import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageOwnerRatingPageRoutingModule } from './garage-owner-rating-routing.module';

import { GarageOwnerRatingPage } from './garage-owner-rating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageOwnerRatingPageRoutingModule
  ],
  declarations: [GarageOwnerRatingPage]
})
export class GarageOwnerRatingPageModule {}
