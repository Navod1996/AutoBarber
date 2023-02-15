import { Component, OnInit } from '@angular/core';
import {Router,  ActivatedRoute } from '@angular/router';
import { MenuController, LoadingController, AlertController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-argent-order-details',
  templateUrl: './argent-order-details.page.html',
  styleUrls: ['./argent-order-details.page.scss'],
})
export class ArgentOrderDetailsPage implements OnInit {
  garadeId: any;
  garadedescription: any;
  garadeimageurl:any;
  garadeTitle:any;
   agentId: any;
   agentdescription: any;
   agentimageurl:any;
   agentTitle:any;
   userName: any;
   userEmail: any;
   userId:any;
   userPhone: any;
   status:any;

   constructor( public route: ActivatedRoute,public navCtrl: NavController,) {
    this.garadeId =this.route.snapshot.params['garadeId'];
    this.garadedescription =this.route.snapshot.params['garadedescription'];
    this.garadeimageurl =this.route.snapshot.params['garadeimageurl'];
    this.garadeTitle =this.route.snapshot.params['garadeTitle'];
    this.agentId =this.route.snapshot.params['agentId'];
    this.agentdescription =this.route.snapshot.params['agentdescription'];
    this.agentimageurl =this.route.snapshot.params['agentimageurl'];
    this.agentTitle =this.route.snapshot.params['agentTitle'];
    this.userName =this.route.snapshot.params['userName'];
    this.userEmail =this.route.snapshot.params['userEmail'];
    this.userId =this.route.snapshot.params['userId'];
    this.userPhone =this.route.snapshot.params['userPhone'];
    this.status =this.route.snapshot.params['status'];
  }

  ngOnInit() {
  }

}
