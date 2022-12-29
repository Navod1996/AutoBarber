import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsacoPage } from './asaco.page';

const routes: Routes = [
  {
    path: '',
    component: AsacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsacoPageRoutingModule {}
