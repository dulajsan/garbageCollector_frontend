import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;

/**
 * Generated class for the MyLocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-location',
  templateUrl: 'my-location.html',
})
export class MyLocation {

  @ViewChild('map') mapElement :ElementRef;
  map:any;
  mylocation:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
  }



  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.mylocation=latLng;

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }



  addMarker(){

let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.mylocation
});

let content = "<h4>Information!</h4>";

this.addInfoWindow(marker, content);

}


addInfoWindow(marker, content){

let infoWindow = new google.maps.InfoWindow({
  content: content
});

google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
});

}

}
