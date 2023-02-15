import { Component, OnInit, NgZone } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
//import { AuthenticationService } from 'src/app/shared/authentication-service';
import { Button } from 'protractor';
import { UserService } from 'src/app/user_service';
import { log } from 'console';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {
  loginForm: FormGroup;
  submitError: string;

 
  data: any[]=[];
  selectedValue:Number = 0;
  id: string;
  email: string;
  password: string;
  details: any;
  name: string;
  phone: string;

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
    private platform: Platform,
    public loadingController: LoadingController,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private ngZone: NgZone,
    private afStore: AngularFirestore,
   // public authService: AuthenticationService,
    public alertController: AlertController,
    public auth: AngularFireAuth,
    public user: UserService
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



    // // Check if url contains our custom 'auth-redirect' param, then show a loader while we receive the getRedirectResult notification
    // this.route.queryParams.subscribe(params => {
    //   const authProvider = params['auth-redirect'];
    //   if (authProvider) {
    //     this.presentLoading(authProvider);
    //   }
    // });

    this.platform.ready().then(() => {

        this.data=[{id:1, name: 'Car Owner' },{id:2, name: 'Garade Owner'}, {id:3, name: 'Argent'}];
    });
  }

  countryChange($event) {
    console.log($event.target.value) ;
    this.selectedValue = $event.target.value;
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Some Error Occured',
      message: 'Please Try Again',
      buttons:['ok']

    });
    await alert.present();
  }

  async noUserSelectAlert(){
    const alert = await this.alertController.create({
      header:'Wrong password',
      message: 'Please check your password ',
      buttons:['ok']

    });
    await alert.present();
  }

  async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['ok']

    });
    await alert.present();
  }

ngOnInit() {

}



// Once the auth provider finished the authentication flow, and the auth redirect completes,
// hide the loader and redirect the user to the profile page
// redirectLoggedUserToProfilePage() {
//   this.dismissLoading();
//   // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
//   // That's why we need to wrap the router navigation call inside an ngZone wrapper
//   this.ngZone.run(() => {
//     // Get previous URL from our custom History Helper
//     // If there's no previous page, then redirect to profile
//     // const previousUrl = this.historyHelper.previousUrl || 'firebase/auth/profile';
//     const previousUrl = 'firebase/auth/profile';

//     // No need to store in the navigation history the sign-in page with redirect params (it's justa a mandatory mid-step)
//     // Navigate to profile and replace current url with profile
//     this.router.navigate([previousUrl], { replaceUrl: true });
//   });
// }

// async presentLoading(authProvider?: string) {
//   const authProviderCapitalized = authProvider[0].toUpperCase() + authProvider.slice(1);

//   this.loadingController.create({
//     message: authProvider ? 'Signing in with ' + authProviderCapitalized : 'Signin in ...',
//     duration: 4000
//   }).then((loader) => {
//     const currentUrl = this.location.path();
//     if (currentUrl.includes('auth-redirect')) {
//       this.redirectLoader = loader;
//       this.redirectLoader.present();
//     }
//   });
// }

// async dismissLoading() {
//   if (this.redirectLoader) {
//     await this.redirectLoader.dismiss();
//   }
// }

// Before invoking auth provider redirect flow, present a loading indicator and add a flag to the path.
// // The precense of the flag in the path indicates we should wait for the auth redirect to complete.
// prepareForAuthWithProvidersRedirection(authProvider: string) {
//   this.presentLoading(authProvider);

//   this.location.replaceState(this.location.path(), 'auth-redirect=' + authProvider, this.location.getState());
// }

// manageAuthWithProvidersErrors(errorMessage: string) {
//   this.submitError = errorMessage;
//   // remove auth-redirect param from url
//   this.location.replaceState(this.router.url.split('?')[0], '');
//   this.dismissLoading();
// }

// resetSubmitError() {
//   this.submitError = null;
// }

async logIn() {
 const {email,password} = this;
  if(this.selectedValue === 1){
    console.log('car owner');
    try{

      const res = await this.auth.signInWithEmailAndPassword(email,password);

      if(res.user){
        this.afStore.collection('carOwners').doc(res.user.uid).valueChanges()
        .subscribe(singleDoc =>{
            this.phone = singleDoc['userPhone'];
            this.id = singleDoc['userId'];
           // if(res.user.uid ===this.id){

              this.user.setUser({
                userEmail: res.user.email,
                userId:res.user.uid,
                userName:res.user.displayName,
                userPhone:this.phone,
                userArea: '',
                       });
                       this.router.navigate(['/car-owner-dashboard']);
            // }else{
            //   this.presentAlert();
            // }
        });



      }
     }catch(e) {
     this.showAlert('Error Occured',e.message);
     }

  }else if(this.selectedValue === 2){
    try{
      const res = await this.auth.signInWithEmailAndPassword(email,password);
      if(res.user){
        this.afStore.collection('garageOwners').doc(res.user.uid).valueChanges()
        .subscribe(singleDoc =>{
            this.phone = singleDoc['userPhone'];
            this.id = singleDoc['userId'];
        });
       // if(res.user.uid === this.id){
          this.user.setUser({
            userEmail: res.user.email,
            userId:res.user.uid,
            userName:res.user.displayName,
            userPhone:this.phone,
            userArea: '',
                   });
                   this.router.navigate(['/garage-owner-dashboard']);
        // }else{
        //   this.presentAlert();
        // }
      }
     }catch(e) {
      console.dir(e);
     this.showAlert('Error Occured',e.message);
     }

  } else if(this.selectedValue === 3){

    try{
      const res = await this.auth.signInWithEmailAndPassword(email,password);
      if(res.user){
        this.afStore.collection('agent').doc(res.user.uid).valueChanges()
        .subscribe(singleDoc =>{
            this.phone = singleDoc['userPhone'];
            this.id = singleDoc['userId'];
        });
       // if(res.user.uid ===this.id){
          this.user.setUser({
            userEmail: res.user.email,
            userId:res.user.uid,
            userName:res.user.displayName,
            userPhone:this.phone,
            userArea: '',
                   });
                   this.router.navigate(['/argent-dashboard']);
        // }else{
        //   this.presentAlert();
        // }
               }
     }catch(e) {
      console.dir(e);
     this.showAlert('Error Occured',e.message);
     }
  }else{
    this.noUserSelectAlert();
  }

    }





}






