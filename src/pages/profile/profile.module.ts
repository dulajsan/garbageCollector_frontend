import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Profile } from './profile';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Profile,
  ],
  imports: [
  //  IonicModule.forChild(Profile),
  ],
  exports: [
    Profile
  ]
})
export class ProfileModule {}
