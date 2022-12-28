import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsAGarageOwnerPage } from './as-a-garage-owner.page';

const routes: Routes = [
  {
    path: '',
    component: AsAGarageOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsAGarageOwnerPageRoutingModule {}
