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

    BASE_URL: string = 'http://localhost:3000';
    GROUP_URL: string = '/group/';
    MESSAGES_URL: string = '/messages';

    constructor(public http: HttpClient) {
        console.log('Hello MessagesProvider');
    }

    public getMessages(groupId) {
        return this.http.get(this.BASE_URL + this.GROUP_URL + groupId + this.MESSAGES_URL);
    }

    public addMessage(groupId, content, userId) {
        var data = {
            "content": content,
            "userId": userId
        }
        return this.http.post(this.BASE_URL + this.GROUP_URL + groupId + this.MESSAGES_URL, data);
    }
}