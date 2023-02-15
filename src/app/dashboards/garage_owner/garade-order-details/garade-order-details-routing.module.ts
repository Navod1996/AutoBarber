import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaradeOrderDetailsPage } from './garade-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: GaradeOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaradeOrderDetailsPageRoutingModule {}
