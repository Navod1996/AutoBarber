import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarOwnerRatingsPage } from './car-owner-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: CarOwnerRatingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOwnerRatingsPageRoutingModule {}
