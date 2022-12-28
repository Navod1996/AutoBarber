import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArgentDashboardPage } from './argent-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ArgentDashboardPage,
    children: [
      {
        path: 'argent-landing',
        loadChildren: () => import('../argent-landing/argent-landing.module').then( m => m.ArgentLandingPageModule)
      },
      {
        path: 'argent-profile',
        loadChildren: () => import('../argent-profile/argent-profile.module').then( m => m.ArgentProfilePageModule)
      },
      {
        path: 'argent-ratings',
        loadChildren: () => import('../argent-ratings/argent-ratings.module').then( m => m.ArgentRatingsPageModule)
      },
    ],
  },
  {
    path:'',
    redirectTo:'/argent-landing',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgentDashboardPageRoutingModule {}
