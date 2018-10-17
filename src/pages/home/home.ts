import { MenuPage } from './../menu/menu';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { User } from '../../app/modelos/user';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as User;
  constructor(private fire: AngularFireAuth,public navCtrl: NavController, private toast: ToastController) {

  }
  async login(user: User){
   
     this.fire.auth.signInWithEmailAndPassword(user.email, user.password).then(success => {
      this.navCtrl.setRoot(MenuPage);
   }).catch(() => {
    this.toast.create({
      message: "E-mail ou Senha não confere",
      duration: 3000
    }).present();
   });
   
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);


  }
}
