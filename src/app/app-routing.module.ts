import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./firebase/auth/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   {
    path: 'sign-up',
    loadChildren: () => import('./firebase/auth/register/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'asaco',
    loadChildren: () => import('./firebase/auth/register/asaco/asaco.module').then( m => m.AsacoPageModule)
  },
   {
    path: 'asanagent',
    loadChildren: () => import('./firebase/auth/register/asanagent/asanagent.module').then( m => m.AsanagentPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'argent-dashboard',
    loadChildren: () => import('./dashboards/argent/argent-dashboard/argent-dashboard.module').then( m => m.ArgentDashboardPageModule)
  },
 
  {
    path: 'car-owner-dashboard',
    loadChildren: () => import('./dashboards/car_owner/car-owner-dashboard/car-owner-dashboard.module').then( m => m.CarOwnerDashboardPageModule)
  },
  {
    path: 'garage-owner-dashboard',
    loadChildren: () => import('./dashboards/garage_owner/garage-owner-dashboard/garage-owner-dashboard.module').then( m => m.GarageOwnerDashboardPageModule)
  },
  {
    path: 'as-a-garage-owner',
    loadChildren: () => import('./firebase/auth/register/as-a-garage-owner/as-a-garage-owner.module').then( m => m.AsAGarageOwnerPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
