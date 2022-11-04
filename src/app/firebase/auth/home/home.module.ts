import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { ComponentsModule } from '../../../components/components.module';

import { HomePageRoutingModule } from './home-routing.module';

import { map } from 'rxjs/operators';

const redirectLoggedInToProfile = (next) => map(user => {
  // when queryParams['auth-redirect'] don't redirect because we want
  // the component to handle the redirection
  if (user !== null && !next.queryParams['auth-redirect']) {
    return ['firebase/auth/profile'];
  } else {
    return true;
  }
});

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToProfile }
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
