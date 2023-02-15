import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';
import { NavController,  } from '@ionic/angular';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garage-owner-landing',
  templateUrl: './garage-owner-landing.page.html',
  styleUrls: ['./garage-owner-landing.page.scss'],
})
export class GarageOwnerLandingPage implements OnInit {

  public goalList: any[];
  public loadGoalList: any[];
  details: any;
  id: string;
  email: string;
  phone: string;

  constructor( public afStore: AngularFirestore, public userDetails: UserService, public navCtrl: NavController,
    public route: ActivatedRoute,

    ) { }

  ngOnInit() {
    this.afStore.collection('orders',ref => ref.where('garadeUserid', '==', this.userDetails.getUID())).valueChanges().subscribe(goalList=>{
      this.goalList = goalList;
      this.loadGoalList = goalList;
    });
    this.initializeItems();
  }

  initializeItems(): void{
    this.goalList = this.loadGoalList;
  }

  filterList(evt){

    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if(searchTerm){
          return;
    }
    this.goalList = this.goalList.filter(currentGoal=>{
      console.log(this.goalList);
      if(currentGoal.userName && searchTerm){
        console.log(searchTerm);
        if(currentGoal.userName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
          return true;
        }
        return false;
        }

  });
  }

  remove(item){

    this.navCtrl.navigateForward(['garade-order-details',{
      orderId:item.orderId,
       garadeId: item.garadeId,
      garadedescription: item.garadedescription,
      garadeimageurl:item.garadeimageurl,
      garadeTitle:item.garadeTitle,
       agentId: item.agentId,
       agentdescription: item.agentdescription,
       agentimageurl:item.agentimageurl,
       agentTitle:item.agentTitle,
       userName: item.userName,
       userEmail: item.userEmail,
       userId:item.userId,
       userPhone: item.userPhone,
       status:item.status,

    }]);
  }

}
