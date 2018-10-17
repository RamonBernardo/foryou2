import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the MaseffectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maseffect',
  templateUrl: 'maseffect.html',
})
export class MaseffectPage {

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
  }

  openWebpage(){
    const browser = this.iab.create('https://www.buscape.com.br/mass-effect-andromeda-playstation-4-blu-ray');
    browser.show();
  }
  trailer(){
    const browser = this.iab.create('https://www.youtube.com/watch?v=X6PJEmEHIaY');
    browser.show();
  }
}
