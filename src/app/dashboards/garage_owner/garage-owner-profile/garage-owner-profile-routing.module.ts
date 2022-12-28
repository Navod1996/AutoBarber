import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarageOwnerProfilePage } from './garage-owner-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GarageOwnerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarageOwnerProfilePageRoutingModule {}
