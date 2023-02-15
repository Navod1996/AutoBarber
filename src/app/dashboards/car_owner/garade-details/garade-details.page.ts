import { Component, OnInit } from '@angular/core';
import { NavController,  } from '@ionic/angular';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garade-details',
  templateUrl: './garade-details.page.html',
  styleUrls: ['./garade-details.page.scss'],
})
export class GaradeDetailsPage implements OnInit {
  id: any;
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
    this.id =this.route.snapshot.params['id'];
    this.title =this.route.snapshot.params['title'];
    this.imageUrl =this.route.snapshot.params['imageUrl'];
    this.description =this.route.snapshot.params['description'];

    console.log(this.id);
    console.log(this.title);
    console.log(this.imageUrl);
    console.log(this.description);
  }

  ngOnInit() {

  }
  async logout(){
    this.navCtrl.navigateForward(['select-agent',{
      garadedescription:this.description,
      garadetitle:this.title,
      garadeid:this.id,
      garadeimageUrl:this.imageUrl,


    }

    ]);
  }
}
