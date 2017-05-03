import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';


@Injectable()
export class Auth {
  public token:any;
  // private BASE_URI:String="http://localhost:8080/";
private  BASE_URI:String="http://139.59.68.13:8080/";

  constructor(public http: Http,public storage: Storage) {
    console.log('Hello Auth Provider');
  }


  //check whether user is logged in or not
  checkAuthentication(){
    return new Promise((resolve, reject) => {
        //Load token if exists
        this.storage.get('token').then((value) => {

            this.token = value;

            let headers = new Headers();
            headers.append('Authorization', this.token);

            this.http.get(this.BASE_URI+'api/auth/protected', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    });
  }


  createAccount(details){

  return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.BASE_URI+'api/auth/register', JSON.stringify(details), {headers: headers})
        .subscribe(res => {

          let data = res.json();
          this.token = data.token;
          this.storage.set('token', data.token);
          // this.storage.set('role', data.user.role);
          window.localStorage.setItem('role',data.user.role);
          this.storage.set('email',data.user.email);
          resolve(data);

        }, (err) => {
          reject(err);
        });

  });

}

login(credentials){

  return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.BASE_URI+'api/auth/login', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {

          let data = res.json();
          console.log(data);
          this.token = data.token;
          this.storage.set('token', data.token);
            //this.storage.set('role', data.user.role);
            window.localStorage.setItem('role',data.user.role);
            this.storage.set('email',data.user.email);
          resolve(data);

          resolve(res.json());
        }, (err) => {
          reject(err);
        });

  });

}


  logout(){
   this.storage.set('token', '');
     window.localStorage.setItem('role',"");
     this.storage.set('email','');
 }


}
