import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageOwnerProfilePageRoutingModule } from './garage-owner-profile-routing.module';

import { GarageOwnerProfilePage } from './garage-owner-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageOwnerProfilePageRoutingModule
  ],
  declarations: [GarageOwnerProfilePage]
})
export class GarageOwnerProfilePageModule {}
