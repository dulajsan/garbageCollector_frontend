import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

/**
 * Generated class for the Usermap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usermap',
  templateUrl: 'usermap.html',
})
export class Usermap {

  @ViewChild('map') mapElement :ElementRef;
  map:any;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=navParams.data;
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){


        let latLng = new google.maps.LatLng(this.user[0].latitude, this.user[0].longitude);
        //this.mylocation=latLng;
        //console.log(latLng);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.BOUNCE,
          position: latLng
        });



    }

}
