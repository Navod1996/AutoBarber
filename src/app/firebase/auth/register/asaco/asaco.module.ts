import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsacoPageRoutingModule } from './asaco-routing.module';

import { AsacoPage } from './asaco.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsacoPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule 
  ],
  declarations: [AsacoPage]
})
export class AsacoPageModule {}
