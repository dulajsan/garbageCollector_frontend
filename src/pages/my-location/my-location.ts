import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {Location} from '../../providers/location';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation,public locationService:Location) {
  }



  ionViewDidLoad() {
    this.initMap();
  }


//get current location
  initMap(){
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //this.mylocation=latLng;
      //console.log(latLng);
      this.mylocation={lat: position.coords.latitude, lng: position.coords.longitude};

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




//add marker and view my lcation
  addMarker(){

    this.todb(this.mylocation);

let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.mylocation
});

let content = "<h4>Information!</h4>";

this.addInfoWindow(marker, content);

}


//show my location info in map
addInfoWindow(marker, content){

let infoWindow = new google.maps.InfoWindow({
  content: content
});

google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
});

}


//location details to database
todb(mylocation){
  this.locationService.mylocation(mylocation).then((result)=>{
    console.log("success");

  },
  (err)=>{
    console.log("error");

  }

);


}



}
