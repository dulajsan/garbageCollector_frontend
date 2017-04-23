import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{Home2} from '../pages/home2/home2';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';
import {MyLocation} from '../pages/my-location/my-location';
import { Geolocation } from '@ionic-native/geolocation';
import {Profile} from '../pages/profile/profile';
import {Search} from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{Auth} from '../providers/auth';
import{Wastes} from '../providers/wastes';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    Home2,
    MyLocation,
    Profile,
    Search
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    Home2,
    MyLocation,
    Profile,
    Search
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Wastes,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
