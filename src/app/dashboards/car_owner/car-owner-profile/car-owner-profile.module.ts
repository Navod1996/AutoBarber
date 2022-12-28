import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarOwnerProfilePageRoutingModule } from './car-owner-profile-routing.module';

import { CarOwnerProfilePage } from './car-owner-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarOwnerProfilePageRoutingModule
  ],
  declarations: [CarOwnerProfilePage]
})
export class CarOwnerProfilePageModule {}
