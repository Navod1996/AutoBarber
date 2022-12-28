import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarOwnerDashboardPage } from './car-owner-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CarOwnerDashboardPage,
    children: [
      {
        path: 'car-owner-landing',
        loadChildren: () => import('../car-owner-landing/car-owner-landing.module').then( m => m.CarOwnerLandingPageModule)

      },
      {
        path: 'car-owner-ratings',
        loadChildren: () => import('../car-owner-ratings/car-owner-ratings.module').then( m => m.CarOwnerRatingsPageModule)

      },
      {
        path: 'car-owner-profile',
        loadChildren: () => import('../car-owner-profile/car-owner-profile.module').then( m => m.CarOwnerProfilePageModule)

      }
    ],
  },
  {
    path:'',
    redirectTo:'/car-owner-landing',
    pathMatch:'full',
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOwnerDashboardPageRoutingModule {}
