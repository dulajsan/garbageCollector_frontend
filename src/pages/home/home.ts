import { Component } from '@angular/core';
import { NavController,ModalController, AlertController, LoadingController  } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';
import { Wastes } from '../../providers/wastes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  wastes: any;
 loading: any;

  constructor(public navCtrl: NavController,public wasteService: Wastes, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad(){

 this.wasteService.getWastes().then((data) => {
       this.wastes = data;
 }, (err) => {
     console.log("not allowed");
 });

}

  addWaste(){

   let prompt = this.alertCtrl.create({
     title: 'Add Waste',
     message: 'Describe your garbage details below:',
     inputs: [
       {
         name: 'category',
         placeholder:'category'

       },
       {
         name:'quantity',
         placeholder:'quantity'
       }

     ],
     buttons: [
       {
         text: 'Cancel'
       },
       {
         text: 'Save',
         handler: waste => {

               if(waste){

                   this.showLoader();

                   this.wasteService.createWaste(waste).then((result) => {
                       this.loading.dismiss();
                       this.wastes = result;
                       console.log("todo created");
                   }, (err) => {
                       this.loading.dismiss();
                       console.log("not allowed");
                   });

               }


         }
       }
     ]
   });

   prompt.present();

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
