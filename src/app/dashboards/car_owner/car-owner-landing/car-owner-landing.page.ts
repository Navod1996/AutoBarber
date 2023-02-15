import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController,  } from '@ionic/angular';
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
    public route: ActivatedRoute,
    public router: Router,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
   // this.getDetails();
    this.afStore.collection('garadeServices').valueChanges().subscribe(goalList=>{
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

  // getDetails(){
  //   this.afStore.collection('garageOwners').doc(this.userDetails.getUID()).valueChanges()
  // .subscribe(singleDoc =>{
  //    this.name = singleDoc['userName'];
  //    this.email = singleDoc['userEmail'];
  //    this.phone = singleDoc['userPhone'];
  // });

  //   };


  remove(item){
    console.log(item.description);
    var title = item.title;
    var imageUrl = item.imageUrl;
    var description = item.description;
    var garadeServiceid = item.garadeServiceid;
    var garadeuserId = item.garadeuserId;
    this.navCtrl.navigateForward(['garade-details',{
      description:description,
      title: title,
      garadeServiceid:garadeServiceid,
      imageUrl:imageUrl,
      garadeuserId:garadeuserId,


    }]);
  }
}
