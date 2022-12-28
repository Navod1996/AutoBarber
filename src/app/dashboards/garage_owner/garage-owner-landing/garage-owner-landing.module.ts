import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageOwnerLandingPageRoutingModule } from './garage-owner-landing-routing.module';

import { GarageOwnerLandingPage } from './garage-owner-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageOwnerLandingPageRoutingModule
  ],
  declarations: [GarageOwnerLandingPage]
})
export class GarageOwnerLandingPageModule {}
