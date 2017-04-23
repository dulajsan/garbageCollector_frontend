import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyLocation } from './my-location';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    MyLocation,
  ],
  imports: [
  //  IonicModule.forChild(MyLocation),
  ],
  exports: [
    MyLocation
  ]
})
export class MyLocationModule {}
