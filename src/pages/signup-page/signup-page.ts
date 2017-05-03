import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import {Home2} from '../home2/home2';
import {Front} from '../front/front';


@IonicPage()
@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html',
})
export class SignupPage {

  name:string;
  role: string;
  email: string;
  password: string;
  nic:string;
  mobile:string;
  area:string;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: Auth, public loadingCtrl: LoadingController) {
  }


  register(){

  this.showLoader();

  let details = {
      name:this.name,
      email: this.email,
      password: this.password,
      nic:this.nic,
      role: this.role,
      mobile:this.mobile,
      area:this.area
  };

  this.authService.createAccount(details).then((result) => {
    this.loading.dismiss();
    if(this.role=="generator"){
        this.navCtrl.setRoot(Front);
    }else if(this.role=="collector"){
        this.navCtrl.setRoot(Front);
    }

  }, (err) => {
      this.loading.dismiss();
  });

}

showLoader(){

   this.loading = this.loadingCtrl.create({
     content: 'Authenticating...'
   });

   this.loading.present();

 }



}
