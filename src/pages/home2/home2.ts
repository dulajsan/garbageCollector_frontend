import { Component } from '@angular/core';
import { NavController,ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';

/**
 * Generated class for the Home2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2 {

  constructor(public navCtrl: NavController, public authService: Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2');
  }

  logout(){

 this.authService.logout();
 this.navCtrl.setRoot(LoginPage);

}

}
