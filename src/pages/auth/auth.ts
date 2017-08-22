import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

  constructor(public navCtrl: NavController) {

  }

  login(): void {
    this.navCtrl.setRoot(HomePage);
  }
}
