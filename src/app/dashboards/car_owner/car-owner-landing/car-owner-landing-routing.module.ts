import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarOwnerLandingPage } from './car-owner-landing.page';

const routes: Routes = [
  {
    path: '',
    component: CarOwnerLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOwnerLandingPageRoutingModule {}
