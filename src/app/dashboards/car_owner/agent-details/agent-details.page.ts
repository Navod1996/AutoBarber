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
  garadeid: any;
  garadetitle: any;
  garadedescription: any;
  garadeimageUrl: any;
  userName: any;
  userEmail: any;
  userPhone: any;
  agentdescription: any;
  agenttitle: any;
  agentid: any;
  agentimageurl: any;
  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public afStore: AngularFirestore,
    public alertController: AlertController,
    public router: Router,
    public userDetails: UserService,
  ) {
    this.garadeid =this.route.snapshot.params['garadeid'];
    this.garadetitle =this.route.snapshot.params['garadetitle'];
    this.garadedescription =this.route.snapshot.params['garadeimageurl'];
    this.garadeimageUrl =this.route.snapshot.params['garadedescription'];
    this.agentdescription =this.route.snapshot.params['agentdescription'];
    this.agenttitle =this.route.snapshot.params['agenttitle'];
    this.agentid =this.route.snapshot.params['agentid'];
    this.agentimageurl =this.route.snapshot.params['agentimageUrl'];

    console.log(this.garadeid);
    console.log(this.garadetitle);
    console.log(this.garadedescription);
    console.log(this.garadeimageUrl);
    console.log(this.agentdescription);
    console.log(this.agenttitle);
    console.log(this.agentid);
    console.log(this.agentimageurl);
  }

  ngOnInit() {
    this.getDetails();
  }
  async placeOrder(){
    var time = new Date();

    try{

      this.afStore.doc(`orders/${time}`).set({
       orderId:time,
       garadeId: this.garadeid,
      garadedescription: this.garadedescription,
      garadeimageurl:this.garadeimageUrl,
      garadeTitle:this.garadetitle,
       agentId: this.garadeid,
       agentdescription: this.garadedescription,
       agentimageurl:this.garadeimageUrl,
       agentTitle:this.garadetitle,
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