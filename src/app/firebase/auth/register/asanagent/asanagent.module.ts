import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsanagentPageRoutingModule } from './asanagent-routing.module';

import { AsanagentPage } from './asanagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsanagentPageRoutingModule
  ],
  declarations: [AsanagentPage]
})
export class AsanagentPageModule {}
