import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController,  } from '@ionic/angular';


@Component({
  selector: 'app-select-agent',
  templateUrl: './select-agent.page.html',
  styleUrls: ['./select-agent.page.scss'],
})
export class SelectAgentPage implements OnInit {
  public goalList: any[];
  public loadGoalList: any[];
  garadeServiceid: any;
  garadeUserid: any;
  garadetitle: any;
  garadedescription: any;
  garadeimageUrl: any;

  details: any;
  name: string;
  email: string;
  phone: string;

  constructor(  private afStore: AngularFirestore,
    public userDetails: UserService,
    public route: ActivatedRoute,
    public router: Router,
    public navCtrl: NavController,) {
      this.garadeServiceid =this.route.snapshot.params['garadeServiceid'];
      this.garadeUserid =this.route.snapshot.params['garadeUserid'];
    this.garadetitle =this.route.snapshot.params['garadetitle'];
    this.garadedescription =this.route.snapshot.params['garadeimageUrl'];
    this.garadeimageUrl =this.route.snapshot.params['garadedescription'];
     }

  ngOnInit() {
    this.afStore.collection('agentServices').valueChanges().subscribe(goalList=>{
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
    var agentid = item.agentId;
    var agentserviceid = item.agentServiceid;
    this.navCtrl.navigateForward(['agent-details',{
      agentdescription:description,
      agenttitle: title,
      agentid:agentid,
      agentServiceid:agentserviceid,
      agentimageUrl:imageUrl,
      garadeUserid: this.garadeUserid,
      garadeServiceid: this.garadeServiceid,
      garadetitle:this.garadetitle,
      garadeimageurl:this.garadeimageUrl,
      garadedescription:this.garadedescription,

    }]);
  }

}
