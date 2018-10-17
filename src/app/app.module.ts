import { GodofwarPage } from './../pages/godofwar/godofwar';
import { HunterPage } from './../pages/hunter/hunter';
import { FifaPage } from './../pages/fifa/fifa';
import { TerrorPage } from './../pages/terror/terror';
import { MenuPage } from './../pages/menu/menu';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{AngularFireModule} from "angularfire2";
import{AngularFireAuthModule} from "angularfire2/auth";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MaseffectPage } from '../pages/maseffect/maseffect';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MenuPage,
    TerrorPage,
    FifaPage,
    HunterPage,
    GodofwarPage,
    MaseffectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MenuPage,
    TerrorPage,
    FifaPage,
    HunterPage,
    GodofwarPage,
    MaseffectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, InAppBrowser
  ]
})
export class AppModule {}
