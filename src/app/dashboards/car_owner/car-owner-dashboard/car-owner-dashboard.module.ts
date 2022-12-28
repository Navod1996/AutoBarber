import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarOwnerDashboardPageRoutingModule } from './car-owner-dashboard-routing.module';

import { CarOwnerDashboardPage } from './car-owner-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarOwnerDashboardPageRoutingModule
  ],
  declarations: [CarOwnerDashboardPage]
})
export class CarOwnerDashboardPageModule {}
