import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';

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
    providers: [LoginProvider]
})
export class LoginPage {

    credentials = {
        username: "",
        password: ""
    };

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private alertCtrl: AlertController, private loginProvider: LoginProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    private login() {

        this.loginProvider.login(this.credentials).subscribe(
            data => {
                localStorage.setItem('token', data.userToken);
                // push HomePage on to the navigation stack
                this.navCtrl.push(HomePage);
            },
            err => {
                let alert = this.alertCtrl.create({
                    title: err.status == 401 ? 'Credenciales incorrectas' : err.message,
                    buttons: ['OK']
                });
                alert.present();
            }
        );
    }
}