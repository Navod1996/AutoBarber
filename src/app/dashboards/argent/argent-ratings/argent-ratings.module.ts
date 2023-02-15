import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentRatingsPageRoutingModule } from './argent-ratings-routing.module';

import { ArgentRatingsPage } from './argent-ratings.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    ArgentRatingsPageRoutingModule
  ],
  declarations: [ArgentRatingsPage]
})
export class ArgentRatingsPageModule {}
