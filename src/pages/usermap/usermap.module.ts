import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Usermap } from './usermap';

@NgModule({
  declarations: [
    Usermap,
  ],
  imports: [
  //  IonicModule.forChild(Usermap),
  ],
  exports: [
    Usermap
  ]
})
export class UsermapModule {}
