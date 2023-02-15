import { Component, OnInit,  NgZone } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { UsernameValidator } from 'src/app/validators/username.validators';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { AuthenticationService } from 'src/app/shared/authentication-service';
import { UserService } from 'src/app/user_service';

@Component({
  selector: 'app-asaco',
  templateUrl: './asaco.page.html',
  styleUrls: ['./asaco.page.scss'],
})
export class AsacoPage implements OnInit {
  signupForm: FormGroup;
  matching_passwords_group: FormGroup;
  submitError: string;
  redirectLoader: HTMLIonLoadingElement;
  name: string;
  email: string;
  phone: string;
  password: string;
  cPassword: string;


  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'Enter a valid phone number.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase and one number.' }
    ],
    'area': [
      { type: 'required', message: 'Area is required.' },
    ],

    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areNotEqual', message: 'Password mismatch' }
    ]
  };


  constructor(
    public router: Router,
   // public authService: AuthenticationService,
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public auth: AngularFireAuth,
    public afStore: AngularFirestore,
    public userDetails: UserService,
  ) {


     this.matching_passwords_group = new FormGroup({
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      'confirm_password': new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areNotEqual(formGroup);
    });

    this.signupForm = new FormGroup({

      'name': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.compose ([
        Validators.required,
        Validators.pattern('^((\\+94-?)|0)?[0-9]{10}$')
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'area': new FormControl('', Validators.required),

      'matching_passwords': this.matching_passwords_group
    });

  }

  ngOnInit() {
  }

  
  async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['ok'],
      cssClass: 'msg-alert'

    });
    await alert.present();
  }

  
async signUp(){
  const {email,password,name,phone,cPassword,} = this;

  
  const signInMethods = await this.auth.fetchSignInMethodsForEmail(email);
  if (signInMethods.length > 0) {
    this.showAlert('Error Occured', 'This email is already in use');
    return;
  }
  
  try{
    const res = await this.auth.createUserWithEmailAndPassword(email,password);
    this.afStore.doc(`carOwners/${res.user.uid}`).set({
      userId:res.user.uid,
      userName:name,
     userEmail: email,
      userPhone:phone,
    });
    
    

    this.userDetails.setUser({
      userEmail: email,
      userId:res.user.uid,
      userName:name,
      userPhone:phone,
      });
      this.router.navigate(['/car-owner-dashboard']);
   }catch(e) {
   this.showAlert('Error Occured',e.message);
   }

}



}

