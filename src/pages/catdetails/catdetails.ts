import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the Catdetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-catdetails',
  templateUrl: 'catdetails.html',
})
export class Catdetails {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.items=navParams.data;
    console.log(this.items);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Catdetails');
  }

  bid(){
    let prompt = this.alertCtrl.create({
      title: 'Bid',
      message: "Enter a amount for Bid",
      inputs: [
        {
          name: 'amount',
          placeholder: 'Amount'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }



  navigate(){

  }

}
