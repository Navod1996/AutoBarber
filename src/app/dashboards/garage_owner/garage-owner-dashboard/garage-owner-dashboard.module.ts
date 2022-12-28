import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageOwnerDashboardPageRoutingModule } from './garage-owner-dashboard-routing.module';

import { GarageOwnerDashboardPage } from './garage-owner-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageOwnerDashboardPageRoutingModule
  ],
  declarations: [GarageOwnerDashboardPage]
})
export class GarageOwnerDashboardPageModule {}
