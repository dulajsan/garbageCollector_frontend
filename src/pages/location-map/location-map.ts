import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * Generated class for the LocationMap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-location-map',
  templateUrl: 'location-map.html',
})
export class LocationMap {

  @ViewChild('map') mapElement :ElementRef;
  map:any;
  mylocation:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.mylocation={lat: position.coords.latitude, lng: position.coords.longitude};

        //this.mylocation=latLng;
        //console.log(latLng);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        directionsDisplay.setMap(this.map);

        this.calculateAndDisplayRoute(directionsService, directionsDisplay);




        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.BOUNCE,
          position: latLng
        });

      });

    }
    //end of init map


    calculateAndDisplayRoute(directionsService, directionsDisplay) {
      let first = new google.maps.LatLng(80.0019556,6.8456933);
      let second = new google.maps.LatLng(42.496401, -124.413126);


        var waypts = [{location:"Malapalla Railway",stopover: true},{location:"Kottawa Railway",stopover: true},{location:"pannipitiya Railway",stopover: true},{location:"Maharagama Railway",stopover: true},{location:"Nawinna Railway",stopover: true},{location:"Udahamulla Railway",stopover: true}];

        directionsService.route({
           origin: this.mylocation,
           destination: "Nugegoda Railway",
           waypoints: waypts,
           optimizeWaypoints: true,
           travelMode: 'DRIVING'
         }, function(response, status) {
           if (status === 'OK') {
               //alert("ok");
               directionsDisplay.setDirections(response);
               var route = response.routes[0];


           } else {
             window.alert('Directions request failed due to ' + status);
         }
        });


    }




}
