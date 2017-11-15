import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Message {
    id: string;
    content: string;
    user: object;
    group: string;

    constructor(id: string, content: string, user: object, group: string) {
        this.id = id;
        this.content = content;
        this.user = user;
        this.group = group;
    }
}

/*
  Generated class for the MessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessagesProvider {

    private messages : Message[] = [
        new Message("1", "Hola, qué tal?", {"image": "lisa-simpson.png" }, "1"),
        new Message("2", "Múltiplícate por 0", {"image": "bart-simpson.png" }, "1"),
        new Message("3", "Bart! Habla bien!", {"image": "marge-simpson.png" }, "1")
    ]

    public getMessages() : Message[] {
        return this.messages;
    }
}