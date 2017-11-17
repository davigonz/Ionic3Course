import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    private credentials = {
        user: "",
        password: ""
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    private login() {
        if (this.credentials.user == "admin" && this.credentials.password == "aaaaa") {

            this.navCtrl.push(HomePage);

        } else {

            let alert = this.alertCtrl.create({
                title: 'Credenciales incorrectas',
                buttons: ['Dismiss']
            });
            alert.present();
        }
    }
}