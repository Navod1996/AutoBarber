import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArgentProfilePageRoutingModule } from './argent-profile-routing.module';

import { ArgentProfilePage } from './argent-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArgentProfilePageRoutingModule
  ],
  declarations: [ArgentProfilePage]
})
export class ArgentProfilePageModule {}
