import { Component } from '@angular/core';

/**
 * Generated class for the MessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'messages',
    templateUrl: 'messages.html'
})
export class MessagesComponent {

    private messages = [
        {
            id: 1,
            "content": "Hola, qué tal?",
            "user": {
                "image": "lisa-simpson.png"
            },
            "group": "1"
        },
        {
            id: 2,
            "content": "Múltiplícate por 0",
            "user": {
                "image": "bart-simpson.png"
            },
            "group": "1"
        },
        {
            id: 3,
            "content": "Bart! Habla bien!",
            "user": {
                "image": "marge-simpson.png"
            },
            "group": "1"
        }
    ];

    constructor() {
        console.log('Hello MessagesComponent Component');
    }
}