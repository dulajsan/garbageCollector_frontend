import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Catdetails } from './catdetails';

@NgModule({
  declarations: [
    Catdetails,
  ],
  imports: [
    //IonicModule.forChild(Catdetails),
  ],
  exports: [
    Catdetails
  ]
})
export class CatdetailsModule {}
