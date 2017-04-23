import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Search } from './search';

@NgModule({
  declarations: [
    Search,
  ],
  imports: [
    //IonicModule.forChild(Search),
  ],
  exports: [
    Search
  ]
})
export class SearchModule {}
