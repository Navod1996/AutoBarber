import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';


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
      header,
      message,
      buttons:["ok"]

    });
    await alert.present();
  }


async recoverPassword() {
    console.log(this.forgotPasswordForm.value);
    const res = await this.auth.sendPasswordResetEmail(this.email).then(()=>{
        this.showAlert('Reset Password','Check your email');
    });

    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
