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

    private groups = [
        new Group("1", "Bar de Moe", "", "moebar.jpg", ["1", "2", "3"]),
        new Group("2", "Central Nuclear", "", "nuclear.jpeg", ["4"]),
        new Group("3", "Iglesia", "", "church.jpg", ["1","2","5"])
    ];

    public getGroups() : Group[] {
        return this.groups;
    }
}