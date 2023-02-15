import { Component, OnInit } from '@angular/core';

import { MenuController, LoadingController, AlertController,NavController } from '@ionic/angular';
import {Router,  ActivatedRoute } from '@angular/router';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.page.html',
  styleUrls: ['./agent-details.page.scss'],
})
export class AgentDetailsPage implements OnInit {
  garadeUserid: any;
  garadeServiceid: any;
  garadetitle: any;
  garadedescription: any;
  garadeimageUrl: any;
  userName: any;
  userEmail: any;
  userPhone: any;
  agentdescription: any;
  agenttitle: any;
  agentid: any;
  agentServiceid: any;
  agentimageurl: any;
  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public afStore: AngularFirestore,
    public alertController: AlertController,
    public router: Router,
    public userDetails: UserService,
  ) {
    this.garadeUserid =this.route.snapshot.params['garadeUserid'];
    this.garadeServiceid =this.route.snapshot.params['garadeServiceid'];
    this.garadetitle =this.route.snapshot.params['garadetitle'];
    this.garadedescription =this.route.snapshot.params['garadeimageurl'];
    this.garadeimageUrl =this.route.snapshot.params['garadedescription'];
    this.agentdescription =this.route.snapshot.params['agentdescription'];
    this.agenttitle =this.route.snapshot.params['agenttitle'];
    this.agentid =this.route.snapshot.params['agentid'];
    this.agentServiceid =this.route.snapshot.params['agentServiceid'];
    this.agentimageurl =this.route.snapshot.params['agentimageUrl'];

  }

  ngOnInit() {
    this.getDetails();
  }
  async placeOrder(){
    var time = new Date();

    try{

      this.afStore.doc(`orders/${time}`).set({
       orderId:time,
       garadeUserid: this.garadeUserid,
       garadeServiceid: this.garadeServiceid,
      garadedescription: this.garadedescription,
      garadeimageurl:this.garadeimageUrl,
      garadeTitle:this.garadetitle,
       agentId: this.agentid,
       agentServiceid:this.agentServiceid,
       agentdescription: this.agentdescription,
       agentimageurl:this.agentimageurl,
       agentTitle:this.agenttitle,
       userName: this.userName,
       userEmail: this.userEmail,
       userId:this.userDetails.getUID(),
       userPhone: this.userPhone,
       status:0,

      });
      this.showAlert('Order Placed Successfully','OrderPlaced Successfully');
      this.router.navigate(['/car-owner-dashboard']);
     }catch(e) {
      console.dir(e);
     this.showAlert('Error Occured',e.message);
     }

  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header : 'Some Error Occured',
      message: 'Please Try Again',
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

  getDetails(){
    this.afStore.collection('carOwners').doc(this.userDetails.getUID()).valueChanges()
  .subscribe(singleDoc =>{
     this.userName = singleDoc['userName'];
     this.userEmail = singleDoc['userEmail'];
     this.userPhone = singleDoc['userPhone'];
  });

    };
}
