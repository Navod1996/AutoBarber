import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgentOrderDetailsPage } from './argent-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: ArgentOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgentOrderDetailsPageRoutingModule {}
