import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login-page/login-page';
import {MyLocation} from '../pages/my-location/my-location';
import {Profile} from '../pages/profile/profile';
import {Search} from '../pages/search/search';
import {Front} from '../pages/front/front';
import {LocationMap} from '../pages/location-map/location-map';
import {Storage} from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public storage:Storage) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.storage.get('role').then((value) => {


      this.pages = [
        { title: 'Home', component: Front },
        { title: 'Categories', component: HomePage },
        { title: 'MyPosts', component: ListPage },
        {title: 'MyLocation', component:MyLocation},
        {title:'Search',component:Search},
          {title:'LocationMap', component:LocationMap},
        {title:'Profile', component:Profile}

      ];


  });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
