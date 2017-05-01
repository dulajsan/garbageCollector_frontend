import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=navParams.data;
    console.log(this.items);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Catdetails');
  }

}
