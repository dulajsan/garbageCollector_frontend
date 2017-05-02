import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LocationMap } from './location-map';

@NgModule({
  declarations: [
    LocationMap,
  ],
  imports: [
    //IonicModule.forChild(LocationMap),
  ],
  exports: [
    LocationMap
  ]
})
export class LocationMapModule {}
