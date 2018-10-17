import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';



/**
 * Generated class for the FifaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifa',
  templateUrl: 'fifa.html',
  
})
export class FifaPage {
  url: string;

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FifaPage');
  }
  openWebpage(){
    const browser = this.iab.create('https://www.buscape.com.br/fifa-18-playstation-4-blu-ray');
    browser.show();
  }

}
