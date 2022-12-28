import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsAGarageOwnerPageRoutingModule } from './as-a-garage-owner-routing.module';

import { AsAGarageOwnerPage } from './as-a-garage-owner.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsAGarageOwnerPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
  ],
  declarations: [AsAGarageOwnerPage]
})
export class AsAGarageOwnerPageModule {}
