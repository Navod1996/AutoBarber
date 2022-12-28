import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgentLandingPage } from './argent-landing.page';

const routes: Routes = [
  {
    path: '',
    component: ArgentLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgentLandingPageRoutingModule {}
