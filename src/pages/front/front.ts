import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,AlertController, LoadingController} from 'ionic-angular';
import { Wastes } from '../../providers/wastes';
import {Catdetails} from '../catdetails/catdetails';
import {Addwaste} from '../addwaste/addwaste';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';

/**
 * Generated class for the Front page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class Front {
  wastes: any;
 loading: any;



  constructor(public navCtrl: NavController,public wasteService: Wastes, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {


  }



  ionViewDidLoad() {
    this.wasteService.getWastes().then((data) => {
          this.wastes = data;
    }, (err) => {
        console.log("not allowed");
    });
  }

  addWaste() {
    this.navCtrl.push(Addwaste);

   }



  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();

  }


   logout(){

  this.authService.logout();
  this.navCtrl.setRoot(LoginPage);

 }

}
