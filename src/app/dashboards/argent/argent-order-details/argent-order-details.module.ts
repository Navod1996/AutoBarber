import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentOrderDetailsPageRoutingModule } from './argent-order-details-routing.module';

import { ArgentOrderDetailsPage } from './argent-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgentOrderDetailsPageRoutingModule
  ],
  declarations: [ArgentOrderDetailsPage]
})
export class ArgentOrderDetailsPageModule {}
