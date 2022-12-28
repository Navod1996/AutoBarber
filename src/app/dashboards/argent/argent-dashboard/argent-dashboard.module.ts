import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentDashboardPageRoutingModule } from './argent-dashboard-routing.module';

import { ArgentDashboardPage } from './argent-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgentDashboardPageRoutingModule
  ],
  declarations: [ArgentDashboardPage]
})
export class ArgentDashboardPageModule {}
