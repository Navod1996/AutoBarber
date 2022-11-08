import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsaspPage } from './asasp.page';

const routes: Routes = [
  {
    path: '',
    component: AsaspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsaspPageRoutingModule {}
