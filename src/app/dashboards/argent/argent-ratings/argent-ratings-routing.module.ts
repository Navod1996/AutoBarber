import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgentRatingsPage } from './argent-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: ArgentRatingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgentRatingsPageRoutingModule {}
