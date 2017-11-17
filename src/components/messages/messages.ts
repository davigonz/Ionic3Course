import { Component, Input, OnInit } from '@angular/core';
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
export class MessagesComponent implements OnInit {

    @Input()
    data

    private messages;

    constructor(private messagesProvider: MessagesProvider) {
        console.log('Hello MessagesComponent');
    }

    ngOnInit() {

        this.messagesProvider.getMessages(this.data._id).subscribe(
            data => {
                this.messages = data;
            }, 
            err => {
                console.log(err.message);
            }
        );
    }
}