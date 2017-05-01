import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Addwaste } from './addwaste';

@NgModule({
  declarations: [
    Addwaste,
  ],
  imports: [
    //IonicModule.forChild(Addwaste),
  ],
  exports: [
    Addwaste
  ]
})
export class AddwasteModule {}
