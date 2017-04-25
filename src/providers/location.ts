import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Location provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Location {

  constructor(public http: Http) {
    console.log('Hello Location Provider');
  }

  mylocation(location){
    return new Promise((resolve,reject)=>{

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('https://garbagecollect.herokuapp.com/api/location', JSON.stringify(location), {headers: headers}).subscribe(res=>{
        let data=res.json();
        resolve(data);

      },
      (err)=>{
        reject(err);
      }
    );

    });

  }

}
