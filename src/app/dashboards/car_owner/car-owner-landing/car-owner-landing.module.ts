import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarOwnerLandingPageRoutingModule } from './car-owner-landing-routing.module';

import { CarOwnerLandingPage } from './car-owner-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarOwnerLandingPageRoutingModule
  ],
  declarations: [CarOwnerLandingPage]
})
export class CarOwnerLandingPageModule {}
