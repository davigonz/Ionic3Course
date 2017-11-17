import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Group {
    id: string;
    name: string;
    description: string;
    image: string;
    userIds: string[];

    constructor(id: string, name: string, description: string, image: string, userIds: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.userIds = userIds;
    }
}

/*
  Generated class for the GroupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupsProvider {

    BASE_URL: string = 'http://localhost:3000';
    GROUPS_URL: string = '/groups';

    constructor(public http: HttpClient) {
        console.log('Hello GroupsProvider');
    }

    public getGroups() {
        return this.http.get(this.BASE_URL + this.GROUPS_URL);
    }
}