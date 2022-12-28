import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarageOwnerLandingPage } from './garage-owner-landing.page';

const routes: Routes = [
  {
    path: '',
    component: GarageOwnerLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarageOwnerLandingPageRoutingModule {}
