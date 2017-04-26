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

  constructor(public http: Http,public authService: Auth,public storage:Storage) {
    console.log('Hello Wastes Provider');
  }


  getWastes(){

  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Authorization', this.authService.token);

    this.http.get('https://garbagecollect.herokuapp.com/api/wastes', {headers: headers})
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
    this.http.post('https://garbagecollect.herokuapp.com/api/wastes', JSON.stringify(this.category), {headers: headers})
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
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

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', this.authService.token);

     this.http.post('https://garbagecollect.herokuapp.com/api/wastes', JSON.stringify(waste), {headers: headers})
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

         this.http.delete('https://garbagecollect.herokuapp.com/api/wastes/' + id, {headers: headers}).subscribe((res) => {
             resolve(res);
         }, (err) => {
             reject(err);
         });

     });

   }



}
