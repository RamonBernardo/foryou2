import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the GodofwarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-godofwar',
  templateUrl: 'godofwar.html',
})
export class GodofwarPage {

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

  openWebpage(){
    const browser = this.iab.create('https://www.buscape.com.br/god-of-war-santa-monica-studio-playstation-4-blu-ray');
    browser.show();
  }
}
