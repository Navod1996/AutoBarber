import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentLandingPageRoutingModule } from './argent-landing-routing.module';

import { ArgentLandingPage } from './argent-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgentLandingPageRoutingModule
  ],
  declarations: [ArgentLandingPage]
})
export class ArgentLandingPageModule {}
