import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../app/modelos/user';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user= {} as User;
  constructor(private toast:ToastController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

 async register(user: User){

     const result = await this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email,user.password).then(success => {
      this.toast.create({
        message: "Conta criada com sucesso",
        duration: 3000
      }).present();
   }).catch(() => {
    this.toast.create({
      message: "Senha tem que possuir mas de 6 digitos",
      duration: 3000
    }).present();
   });
     console.log(result);
  
    }
      }


  

