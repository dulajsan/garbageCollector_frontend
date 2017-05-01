import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wastes} from '../../providers/wastes';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public wasteService:Wastes) {

    //  console.log(this.cat);
     this.wasteService.getmyPost().then((result) => {

         console.log("success my post");
         this.items=result;

     }, (err) => {

         console.log("error");
     });

  }
}
