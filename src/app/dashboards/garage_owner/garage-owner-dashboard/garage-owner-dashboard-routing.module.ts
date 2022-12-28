import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarageOwnerDashboardPage } from './garage-owner-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: GarageOwnerDashboardPage,
    children: [
      {
        path: 'garage-owner-profile',
        loadChildren: () => import('../garage-owner-profile/garage-owner-profile.module').then( m => m.GarageOwnerProfilePageModule)
      },
      {
        path: 'garage-owner-rating',
        loadChildren: () => import('../garage-owner-rating/garage-owner-rating.module').then( m => m.GarageOwnerRatingPageModule)
      },
      {
        path: 'garage-owner-landing',
        loadChildren: () => import('../garage-owner-landing/garage-owner-landing.module').then( m => m.GarageOwnerLandingPageModule)
      },
    ],
  },
  {
    path:'',
    redirectTo:'/garage-owner-landing',
    pathMatch:'full',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarageOwnerDashboardPageRoutingModule {}
