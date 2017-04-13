import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';


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
    console.log(result);
    this.navCtrl.setRoot(HomePage);
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
