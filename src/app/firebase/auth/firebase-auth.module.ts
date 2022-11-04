import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { FirebaseAuthService } from './firebase-auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

const routes: Routes = [
  {
    path: '',
    children: [
      // /firebase/auth redirect
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
     
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireAuthModule
  ],
  providers: [FirebaseAuthService]
})
export class FirebaseAuthModule {}