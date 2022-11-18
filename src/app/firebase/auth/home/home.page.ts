import { Component, OnInit, NgZone } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthenticationService } from 'src/app/shared/authentication-service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {
  loginForm: FormGroup;
  submitError: string;
  redirectLoader: HTMLIonLoadingElement;
  authRedirectResult: Subscription;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor( 
    public loadingController: LoadingController,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private ngZone: NgZone,
    public authService: AuthenticationService,
    public alertController: AlertController,
  ) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });

  

    // Check if url contains our custom 'auth-redirect' param, then show a loader while we receive the getRedirectResult notification
    this.route.queryParams.subscribe(params => {
      const authProvider = params['auth-redirect'];
      if (authProvider) {
        this.presentLoading(authProvider);
      }
    });
  }


 
ngOnInit() {
  this.dismissLoading();
}

// Once the auth provider finished the authentication flow, and the auth redirect completes,
// hide the loader and redirect the user to the profile page
redirectLoggedUserToProfilePage() {
  this.dismissLoading();
  // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
  // That's why we need to wrap the router navigation call inside an ngZone wrapper
  this.ngZone.run(() => {
    // Get previous URL from our custom History Helper
    // If there's no previous page, then redirect to profile
    // const previousUrl = this.historyHelper.previousUrl || 'firebase/auth/profile';
    const previousUrl = 'firebase/auth/profile';

    // No need to store in the navigation history the sign-in page with redirect params (it's justa a mandatory mid-step)
    // Navigate to profile and replace current url with profile
    this.router.navigate([previousUrl], { replaceUrl: true });
  });
}

async presentLoading(authProvider?: string) {
  const authProviderCapitalized = authProvider[0].toUpperCase() + authProvider.slice(1);

  this.loadingController.create({
    message: authProvider ? 'Signing in with ' + authProviderCapitalized : 'Signin in ...',
    duration: 4000
  }).then((loader) => {
    const currentUrl = this.location.path();
    if (currentUrl.includes('auth-redirect')) {
      this.redirectLoader = loader;
      this.redirectLoader.present();
    }
  });
}

async dismissLoading() {
  if (this.redirectLoader) {
    await this.redirectLoader.dismiss();
  }
}

// Before invoking auth provider redirect flow, present a loading indicator and add a flag to the path.
// The precense of the flag in the path indicates we should wait for the auth redirect to complete.
prepareForAuthWithProvidersRedirection(authProvider: string) {
  this.presentLoading(authProvider);

  this.location.replaceState(this.location.path(), 'auth-redirect=' + authProvider, this.location.getState());
}

manageAuthWithProvidersErrors(errorMessage: string) {
  this.submitError = errorMessage;
  // remove auth-redirect param from url
  this.location.replaceState(this.router.url.split('?')[0], '');
  this.dismissLoading();
}

resetSubmitError() {
  this.submitError = null;
}

logIn(email, password) {
this.authService.SignIn(email.value, password.value)
  
    .then((res) => {
      if(this.authService.isEmailVerified) {
        this.router.navigate(['dashboard']);          
      } else {
        window.alert('Email is not verified')
        return false;
      }
    }).catch((error) => {
      window.alert(error.message)
    })


    }

    async showAlert(header, message) {
      const alert = await this.alertController.create({
        header,
        message,
        buttons: ['OK'],
      });
      await alert.present();
    }
   
   

}






