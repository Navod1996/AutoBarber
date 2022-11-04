import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject, from, of } from 'rxjs';
import { Platform } from '@ionic/angular';
import { cfaSignIn, cfaSignOut } from 'capacitor-firebase-auth';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, authState,   updateProfile, UserInfo, UserCredential, } from '@angular/fire/auth';

import { User } from '@angular/fire/auth';
import { isPlatformBrowser } from '@angular/common';




@Injectable()
export class FirebaseAuthService {

  currentUser$ = authState(this.auth);
  currentUser: User;
  redirectResult: Subject<any> = new Subject<any>();

  constructor(
    public angularFire: AngularFireAuth,
    public platform: Platform,
    private auth: Auth, 
    @Inject(PLATFORM_ID) private platformId: object

  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.angularFire.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          this.currentUser = user;
        } else {
          // No user is signed in.
          this.currentUser = null;
        }
      });

      if (!this.platform.is('capacitor')) {
        // when using signInWithRedirect, this listens for the redirect results
        this.angularFire.getRedirectResult()
        .then((result) => {
          // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
          const user: any = result.user || this.currentUser;

          if (user) {
            this.redirectResult.next(user);
          }
        }, (error) => {
          this.redirectResult.next({error: error.code});
        });
      }
    }
  }

  getRedirectResult(): Observable<any> {
    return this.redirectResult.asObservable();
  }
  

    signOut(): Observable<any> {
      if (this.platform.is('capacitor')) {
        return cfaSignOut();
      } else {
        return from(this.angularFire.signOut());
      }
    }

 

 
  
  
    
  
    
     
    
}
