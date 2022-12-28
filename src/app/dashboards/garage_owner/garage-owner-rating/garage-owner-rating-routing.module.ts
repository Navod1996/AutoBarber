import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarageOwnerRatingPage } from './garage-owner-rating.page';

const routes: Routes = [
  {
    path: '',
    component: GarageOwnerRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarageOwnerRatingPageRoutingModule {}
