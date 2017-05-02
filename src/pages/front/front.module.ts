import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Front } from './front';

@NgModule({
  declarations: [
    Front,
  ],
  imports: [
  //  IonicModule.forChild(Front),
  ],
  exports: [
    Front
  ]
})
export class FrontModule {}
