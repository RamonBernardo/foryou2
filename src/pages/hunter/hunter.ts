import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the HunterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hunter',
  templateUrl: 'hunter.html',
})
export class HunterPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }
  openWebpage(){
    const browser = this.iab.create('https://www.buscape.com.br/monster-hunter-world-playstation-4-blu-ray');
    browser.show();
  }

}
