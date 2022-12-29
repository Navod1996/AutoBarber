import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  profile=null;

  constructor(
  ) { }

  ngOnInit() {
  }

}
