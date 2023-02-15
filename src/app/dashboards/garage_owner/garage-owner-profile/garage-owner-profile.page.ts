import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garage-owner-profile',
  templateUrl: './garage-owner-profile.page.html',
  styleUrls: ['./garage-owner-profile.page.scss'],
})
export class GarageOwnerProfilePage implements OnInit {

  details: any;
  name: string;
  email: string;
  phone: string;

  constructor(
    private afStore: AngularFirestore,
    public router: Router,
   public userDetails: UserService,
   public auth: AngularFireAuth,
   public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getDetails();
  }
  async logout(){
    const res = await this.auth.signOut().then(
      ()=>{
        this.userDetails.setUser({
          userEmail: '',
          userId: '',
          userName: '',
          userPhone: '',
          });

      }
    );
    this.router.navigate(['/home']);
  }

  getDetails(){
    this.afStore.collection('garageOwners').doc(this.userDetails.getUID()).valueChanges()
  .subscribe(singleDoc =>{
     this.name = singleDoc['userName'];
     this.email = singleDoc['userEmail'];
     this.phone = singleDoc['userPhone'];
  });

    };

}
