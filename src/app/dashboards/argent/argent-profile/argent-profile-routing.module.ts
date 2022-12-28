import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgentProfilePage } from './argent-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ArgentProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgentProfilePageRoutingModule {}
