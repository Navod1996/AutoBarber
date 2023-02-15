import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageOwnerRatingPageRoutingModule } from './garage-owner-rating-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GarageOwnerRatingPage } from './garage-owner-rating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    GarageOwnerRatingPageRoutingModule
  ],
  declarations: [GarageOwnerRatingPage]
})
export class GarageOwnerRatingPageModule {}
