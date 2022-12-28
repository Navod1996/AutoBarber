import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentRatingsPageRoutingModule } from './argent-ratings-routing.module';

import { ArgentRatingsPage } from './argent-ratings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgentRatingsPageRoutingModule
  ],
  declarations: [ArgentRatingsPage]
})
export class ArgentRatingsPageModule {}
