import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {
  testCheckboxOpen:any;
  testCheckboxResult:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }


  categorywise() {
   let alert = this.alertCtrl.create();
   alert.setTitle('which category you need');

   alert.addInput({
     type: 'checkbox',
     label: 'plastic',
     value: 'plastic',
     checked: true
   });

   alert.addInput({
     type: 'checkbox',
     label: 'glass',
     value: 'glass'
   });

   alert.addInput({
     type: 'checkbox',
     label: 'metal',
     value: 'metal'
   });

   alert.addInput({
     type: 'checkbox',
     label: 'battery',
     value: 'battery'
   });

   alert.addButton('Cancel');
   alert.addButton({
     text: 'search',
     handler: data => {
       console.log('Checkbox data:', data);
       this.testCheckboxOpen = false;
       this.testCheckboxResult = data;
     }
   });
   alert.present();
 }

}
