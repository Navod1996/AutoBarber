import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';

@Component({
  selector: 'app-car-owner-landing',
  templateUrl: './car-owner-landing.page.html',
  styleUrls: ['./car-owner-landing.page.scss'],

})
export class CarOwnerLandingPage implements OnInit {
  public goalList: any[];
  public loadGoalList: any[];

  details: any;
  name: string;
  email: string;
  phone: string;

  constructor(
    private afStore: AngularFirestore,
    public userDetails: UserService,
  ) { }

  ngOnInit() {
    this.afStore.collection('carOwners').valueChanges().subscribe(goalList=>{
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
    console.log(searchTerm);
    if(searchTerm){
          return;
    }
    this.goalList = this.goalList.filter(currentGoal=>{
      if(currentGoal.userName && searchTerm){
        if(currentGoal.userName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
          return true;
        }
        return false;

      }

  });
  }
}
