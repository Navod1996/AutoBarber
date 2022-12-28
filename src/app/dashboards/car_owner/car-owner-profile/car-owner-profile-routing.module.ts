import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarOwnerProfilePage } from './car-owner-profile.page';

const routes: Routes = [
  {
    path: '',
    component: CarOwnerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOwnerProfilePageRoutingModule {}
