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

    private messages;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private messagesProvider: MessagesProvider) {
        this.group = navParams.get('group');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatPage');
        this.getMessages();
    }

    sendMessage(message: String) {
        this.messagesProvider.addMessage(
            this.group._id,
            message,
            localStorage.getItem('userId')
        ).subscribe(
            data => {
                // Refresh messages
                this.getMessages();
            },
            err => {
            }
            );
    }

    private getMessages() {
        this.messagesProvider.getMessages(this.group._id).subscribe(
            data => {
                this.messages = data;
            },
            err => {
                console.log(err.message);
            }
        );
    }
}