import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { Wastes } from '../../providers/wastes';

/**
 * Generated class for the Addwaste page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addwaste',
  templateUrl: 'addwaste.html',
})
export class Addwaste {

  quantity:Number;
  category:String;
  waste:any;
  wastes:any;
   loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public wasteService:Wastes,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Addwaste');
  }

  addwaste(){
    this.waste={category:this.category,quantity:this.quantity};
    //console.log(this.waste);
                this.wasteService.createWaste(this.waste).then((result) => {
                        //  this.loading.dismiss();
                          this.wastes = result;
                          //console.log("waste created");
                          this.showAlert();
                      }, (err) => {
                          this.loading.dismiss();
                          console.log("not allowed");
                      });

  }

  showAlert() {
   let alert = this.alertCtrl.create({
     title: 'Success!',
     subTitle: 'Successfully added!',
     buttons: ['OK']
   });
   alert.present();
 }

}
