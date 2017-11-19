import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesProvider } from '../../providers/messages/messages';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    providers: [MessagesProvider]
})
export class ChatPage {

    private group;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        private messagesProvider: MessagesProvider) {
        this.group = navParams.get('group');
    }

    sendMessage(message: String) {
        this.messagesProvider.addMessage(
            this.group._id, 
            message, 
            localStorage.getItem('userId')
        ).subscribe(
            data => {
                // Rerender messages component
                // Push the new message to it
            },
            err => {
            }
        );
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
    }
}