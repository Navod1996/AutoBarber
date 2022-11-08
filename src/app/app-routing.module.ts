import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./firebase/auth/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./firebase/auth/register/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },  {
    path: 'asaco',
    loadChildren: () => import('./firebase/auth/register/asaco/asaco.module').then( m => m.AsacoPageModule)
  },
  {
    path: 'asasp',
    loadChildren: () => import('./firebase/auth/register/asasp/asasp.module').then( m => m.AsaspPageModule)
  },
  {
    path: 'asanagent',
    loadChildren: () => import('./firebase/auth/register/asanagent/asanagent.module').then( m => m.AsanagentPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
