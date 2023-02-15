import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaradeDetailsPageRoutingModule } from './garade-details-routing.module';

import { GaradeDetailsPage } from './garade-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaradeDetailsPageRoutingModule
  ],
  declarations: [GaradeDetailsPage]
})
export class GaradeDetailsPageModule {}
