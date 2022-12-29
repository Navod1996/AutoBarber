import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindaspPage } from './findasp.page';

const routes: Routes = [
  {
    path: '',
    component: FindaspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindaspPageRoutingModule {}
