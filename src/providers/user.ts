import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Auth } from '../providers/auth';
import {Storage} from '@ionic/storage';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {

  userdetails:any;
  // private BASE_URI:String="http://localhost:8080/";
private  BASE_URI:String="http://139.59.68.13:8080/";

  constructor(public http: Http,public storage:Storage,public authService:Auth) {
    console.log('Hello User Provider');
  }


  getlocation(useremail){

    return new Promise((resolve,reject)=>{

      let email=useremail;


      let headers=new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
      //this.category={cat:category};
      this.userdetails={email:email}
      this.http.post(this.BASE_URI+'api/users/loc', JSON.stringify(this.userdetails), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        //  console.log(res);
        }, (err) => {
          reject(err);
        });

    });


  }

}
