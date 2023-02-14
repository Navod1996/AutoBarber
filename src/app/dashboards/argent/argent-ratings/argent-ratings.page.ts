import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore,AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-argent-ratings',
  templateUrl: './argent-ratings.page.html',
  styleUrls: ['./argent-ratings.page.scss'],
})
export class ArgentRatingsPage implements OnInit {
  title: string;
  description: string;
  signupForm: FormGroup;
  submitError: string;
  items: Observable<any[]>;
  itemsRef: AngularFirestoreCollection;


  selectedFile: any;
  loading: HTMLIonLoadingElement;


  constructor(private afStore: AngularFirestore,
     private afStorage: AngularFireStorage,
     private loadingController: LoadingController,
     public route: ActivatedRoute,
     public menu: MenuController,

     public alertController: AlertController,

     ) {
      this.itemsRef = afStore.collection('agentServices');
    this.items = this.itemsRef.valueChanges();
      this.signupForm = new FormGroup({

        'title': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.compose ([
          Validators.required,

        ])),
        'email': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),

      });
     }

  ngOnInit() {

  }

  chooseFile(event) {
    this.selectedFile = event.target.files
  }

  validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ],
    'description': [
      { type: 'required', message: 'Description is required.' }
    ],
  };

  addTodo(){
    this.itemsRef.add({
      title: this.title,
      description:this.description,
    })
    .then(async resp => {
      await this.presentLoading();
      const imageUrl = await this.uploadFile(resp.id, this.selectedFile);

      this.itemsRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      });
    }).catch(error => {
      console.log(error);
    });
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }


  async uploadFile(id, file): Promise<any> {
    if(file && file.length) {
      try {

        const task = await this.afStorage.ref('images').child(id).put(file[0])
        this.loading.dismiss();
        return this.afStorage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }
  remove(item){
    console.log(item);
    if(item.imageUrl) {
      this.afStorage.ref(`images/${item.id}`).delete();
    }
    this.itemsRef.doc(item.id).delete();
  }




  async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['ok']

    });
    await alert.present();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header : 'Some Error Occured',
      message: 'Please Try Again',
      buttons:['ok']

    });
    await alert.present();
  }

  async addService(){}


}
