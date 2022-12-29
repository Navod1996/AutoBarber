import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsanagentPageRoutingModule } from './asanagent-routing.module';

import { AsanagentPage } from './asanagent.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule ,
    AsanagentPageRoutingModule
  ],
  declarations: [AsanagentPage]
})
export class AsanagentPageModule {}
