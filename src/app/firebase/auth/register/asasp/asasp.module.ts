import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsaspPageRoutingModule } from './asasp-routing.module';

import { AsaspPage } from './asasp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsaspPageRoutingModule
  ],
  declarations: [AsaspPage]
})
export class AsaspPageModule {}
