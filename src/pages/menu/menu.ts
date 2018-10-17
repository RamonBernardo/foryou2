import { MaseffectPage } from './../maseffect/maseffect';
import { GodofwarPage } from './../godofwar/godofwar';
import { HunterPage } from './../hunter/hunter';
import { FifaPage } from './../fifa/fifa';
import { HomePage } from './../home/home';
import { TerrorPage } from './../terror/terror';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {

  constructor(private fire: AngularFireAuth,private toast: ToastController , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.fire.authState.subscribe(data => {
     if(data && data.email && data.uid){
     this.toast.create({
       message: "Bem Vindo ao FORYOU, "+ data.email,
       duration: 3000
     }).present();
    }
    else{
      this.toast.create({
        message: "E-mail ou Senha não confere",
        duration: 3000
      }).present();
    }
   });
  }
  terror(){

    this.navCtrl.push(TerrorPage);
  }
  sair(){
    this.navCtrl.push(HomePage);

  }
  fifa(){
    this.navCtrl.push(FifaPage);

  }
  hunter(){
    this.navCtrl.push(HunterPage);
  }
  godOfWar(){
    this.navCtrl.push(GodofwarPage);
  }
  massefect(){
    this.navCtrl.push(MaseffectPage);
  }
}