import { Component } from '@angular/core';
import { Message, MessagesProvider } from '../../providers/messages/messages';

/**
 * Generated class for the MessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'messages',
    templateUrl: 'messages.html',
    providers: [MessagesProvider]
})
export class MessagesComponent {

    private messages : Message[];

    constructor(messagesProvider: MessagesProvider) {
        console.log('Hello MessagesComponent Component');
        this.messages = messagesProvider.getMessages();
    }
}