import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Location provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Location {

  locationobj:any;
  // private BASE_URI:String="http://localhost:8080/";
private  BASE_URI:String="http://139.59.68.13:8080/";

  constructor(public http: Http,public storage:Storage) {
    console.log('Hello Location Provider');
  }

  mylocation(location){
    return new Promise((resolve,reject)=>{

      this.storage.get('email').then((value) => {

      let email=value;
      this.locationobj={lat:location.lat,lng:location.lng,email:email};


      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.BASE_URI+'api/location/add', JSON.stringify(this.locationobj), {headers: headers}).subscribe(res=>{
        let data=res.json();
        resolve(data);

      },
      (err)=>{
        reject(err);
      }
    );

    });

  });

  }

}
