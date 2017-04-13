import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Auth} from './auth';

/*
  Generated class for the Wastes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Wastes {

  constructor(public http: Http,public authService: Auth) {
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

createWaste(waste){

   return new Promise((resolve, reject) => {

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
