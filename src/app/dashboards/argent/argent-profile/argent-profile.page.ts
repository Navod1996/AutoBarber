import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user_service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-argent-profile',
  templateUrl: './argent-profile.page.html',
  styleUrls: ['./argent-profile.page.scss'],
})
export class ArgentProfilePage implements OnInit {
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
          userArea: '',
          });

      }
    );
    this.router.navigate(['/home']);
  }

  getDetails(){
    this.afStore.collection('agent').doc(this.userDetails.getUID()).valueChanges()
  .subscribe(singleDoc =>{
     this.name = singleDoc['userName'];
     this.email = singleDoc['userEmail'];
     this.phone = singleDoc['userPhone'];
  });

    };
}
