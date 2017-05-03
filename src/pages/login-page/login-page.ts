import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {HomePage} from '../home/home';
import {Home2} from '../home2/home2';
import {SignupPage} from '../signup-page/signup-page';
import {Storage} from '@ionic/storage';
import {Front} from '../front/front';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

email:string;
password:string;
loading:any;
userReturnData:any;
role:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: Auth, public loadingCtrl: LoadingController,
     public storage:Storage) {
      this.storage.get('role').then((value)=>{
        this.role=value;

      });
  }

  //trigger as soon as the page is loaded
ionViewDidLoad() {
  this.showLoader();

      //Check if already authenticated
      this.authService.checkAuthentication().then((res) => {
        //  console.log("Already authorized");
        //console.log(this.role);
          this.loading.dismiss();

              this.navCtrl.setRoot(Front);



      }, (err) => {
          //console.log("Not already authorized");
          this.loading.dismiss();
      });

}

login(){

        this.showLoader();

        let credentials = {
            email: this.email,
            password: this.password
        };

        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            this.userReturnData=result;
           let type=this.userReturnData.user.role;

             this.navCtrl.setRoot(Front);

          



        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });

    }

    launchSignup(){
        this.navCtrl.push(SignupPage);
    }

    showLoader(){

        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });

        this.loading.present();

    }

}
