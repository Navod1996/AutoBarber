import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsanagentPage } from './asanagent.page';

const routes: Routes = [
  {
    path: '',
    component: AsanagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsanagentPageRoutingModule {}
