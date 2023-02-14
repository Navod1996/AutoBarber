import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../firebase-authentication-service'; 


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],

})
export class ForgotPasswordPage implements OnInit {

  email: string;

  forgotPasswordForm: FormGroup;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ]
  };

  constructor(
    public router: Router,
    public auth: AngularFireAuth,
    public menu: MenuController,
    public alertController: AlertController,
    private authService: AuthService,
    private navCtrl: NavController,

  ) {
    this.forgotPasswordForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
   }

   async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: 'Successfull',
      message: 'Password reset link has been sent!',
      buttons:[{
        text:"ok",
        handler: () => {
          this.navCtrl.navigateRoot('/home');
        }
      }],
      cssClass: 'msg-alert'

    });
    await alert.present();
  }


  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => {
      this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cancel(){
    this.navCtrl.navigateRoot('/home');
  }

  ngOnInit() {
  }

}
