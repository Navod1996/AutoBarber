import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CarOwnerLandingPageRoutingModule } from './car-owner-landing-routing.module';

import { CarOwnerLandingPage } from './car-owner-landing.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    CarOwnerLandingPageRoutingModule
  ],
  declarations: [CarOwnerLandingPage]
})
export class CarOwnerLandingPageModule {}
