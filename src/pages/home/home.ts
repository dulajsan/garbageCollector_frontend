import { Component } from '@angular/core';
import { NavController,ModalController, AlertController, LoadingController  } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';
import { Wastes } from '../../providers/wastes';
import {Catdetails} from '../catdetails/catdetails';
import {Addwaste} from '../addwaste/addwaste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  wastes: any;
 loading: any;
 categories:any;
 cat:String;

  constructor(public navCtrl: NavController,public wasteService: Wastes, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {

      this.categories = [
    {
      'title': 'Plastic',
      'icon': 'trash',
      'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      'color': '#662e91'
    },
    {
      'title': 'Metal',
      'icon': 'trash',
      'description': 'The latest version of cascading stylesheets - the styling language of the web!',
      'color': '#ed1b24'
    },
    {
      'title': 'Battery',
      'icon': 'trash',
      'description': 'The latest version of the web\'s markup language.',
      'color': '#4d4d4d'
    },
    {
      'title': 'Organic',
      'icon': 'trash',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#376503'
    },
    {
      'title': 'Paper',
      'icon': 'trash',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#ffbc01'
    },
    {
      'title': 'Glass',
      'icon': 'trash',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#0180f1'
    }
  ];
  }

  ionViewDidLoad(){

 this.wasteService.getWastes().then((data) => {
       this.wastes = data;
 }, (err) => {
     console.log("not allowed");
 });

}

 //  addWaste(){
 //
 //   let prompt = this.alertCtrl.create({
 //     title: 'Add Waste',
 //     message: 'Describe your garbage details below:',
 //     inputs: [
 //       {
 //         name: 'category',
 //         placeholder:'category'
 //
 //       },
 //       {
 //         type:'radio',
 //         name:'quantity',
 //         label:'Plastic',
 //         value:'plastic'
 //
 //       }
 //
 //     ],
 //     buttons: [
 //       {
 //         text: 'Cancel'
 //       },
 //       {
 //         text: 'Save',
 //         handler: waste => {
 //
 //               if(waste){
 //
 //                   this.showLoader();
 //
 //                   this.wasteService.createWaste(waste).then((result) => {
 //                       this.loading.dismiss();
 //                       this.wastes = result;
 //                       console.log("todo created");
 //                   }, (err) => {
 //                       this.loading.dismiss();
 //                       console.log("not allowed");
 //                   });
 //
 //               }
 //
 //
 //         }
 //       }
 //     ]
 //   });
 //
 //   prompt.present();
 //
 // }

 addWaste() {
   this.navCtrl.push(Addwaste);

  }

 openNavDetailsPage(category){
   this.cat=category.title;
  //  console.log(this.cat);
   this.wasteService.getcategoryDetails(this.cat).then((result) => {

       console.log("success");
       this.navCtrl.push(Catdetails,result);
   }, (err) => {

       console.log("error");
   });

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
