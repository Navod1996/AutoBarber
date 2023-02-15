import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaradeDetailsPage } from './garade-details.page';

const routes: Routes = [
  {
    path: '',
    component: GaradeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaradeDetailsPageRoutingModule {}
