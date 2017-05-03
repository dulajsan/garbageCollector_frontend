import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Auth} from './auth';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Wastes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Wastes {

  category:any;
  user:any;
  // private BASE_URI:String="http://localhost:8080/";
private  BASE_URI:String="http://139.59.68.13:8080/";

  constructor(public http: Http,public authService: Auth,public storage:Storage) {
    console.log('Hello Wastes Provider');
  }


  getWastes(){

  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Authorization', this.authService.token);

    this.http.get(this.BASE_URI+'api/wastes', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
  });

}


getcategoryDetails(category){

  return new Promise((resolve,reject)=>{

    this.storage.get('email').then((value) => {

    let email=value;


    let headers=new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.token);
    //this.category={cat:category};
    this.category={email:email,cat:category}
    this.http.post(this.BASE_URI+'api/wastes/cat', JSON.stringify(this.category), {headers: headers})
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
        //console.log(res);
      }, (err) => {
        reject(err);
      });

  });
});

}


getmyPost(){

  return new Promise((resolve,reject)=>{

    this.storage.get('email').then((value) => {

    let email=value;


    let headers=new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.token);
    //this.category={cat:category};
    this.user={email:email}
    this.http.post(this.BASE_URI+'api/wastes/mypost', JSON.stringify(this.user), {headers: headers})
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
        //console.log(res);
      }, (err) => {
        reject(err);
      });

  });
});


}

createWaste(waste){

   return new Promise((resolve, reject) => {
     this.storage.get('email').then((value) => {

     let email=value;
     waste.user=email;

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', this.authService.token);

     this.http.post(this.BASE_URI+'api/wastes', JSON.stringify(waste), {headers: headers})
       .map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });

   });

 });

 }


 deleteWaste(id){

     return new Promise((resolve, reject) => {

         let headers = new Headers();
         headers.append('Authorization', this.authService.token);

         this.http.delete(this.BASE_URI+'api/wastes/' + id, {headers: headers}).subscribe((res) => {
             resolve(res);
         }, (err) => {
             reject(err);
         });

     });

   }



}
