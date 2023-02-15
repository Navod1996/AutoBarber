import { Component, OnInit } from '@angular/core';
import { NavController,  } from '@ionic/angular';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garade-details',
  templateUrl: './garade-details.page.html',
  styleUrls: ['./garade-details.page.scss'],
})
export class GaradeDetailsPage implements OnInit {
  garadeUserid: any;
  garadeServiceid: any;
  title: any;
  description: any;
  imageUrl: any;
  userName: any;
  userEmail: any;
  userPhone: any;
  constructor(
    public navCtrl: NavController,
    public route: ActivatedRoute,
  ) {
    this.garadeUserid =this.route.snapshot.params['garadeuserId'];
    this.garadeServiceid =this.route.snapshot.params['garadeServiceid'];
    this.title =this.route.snapshot.params['title'];
    this.imageUrl =this.route.snapshot.params['imageUrl'];
    this.description =this.route.snapshot.params['description'];


  }

  ngOnInit() {

  }
  async logout(){
    this.navCtrl.navigateForward(['select-agent',{
      garadedescription:this.description,
      garadetitle:this.title,
      garadeUserid:this.garadeUserid,
      garadeServiceid:this.garadeServiceid,
      garadeimageUrl:this.imageUrl,


    }

    ]);
  }
}
