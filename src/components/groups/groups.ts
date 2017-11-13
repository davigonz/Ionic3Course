import { Component } from '@angular/core';

/**
 * Generated class for the GroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'groups',
    templateUrl: 'groups.html'
})
export class GroupsComponent {

    private groups = [{ "id": "1", "name": "Bar de Moe", "desc": "", "image": "moebar.jpg", "userIds": [1, 2, 3] },
    { "id": "2", "name": "Central Nuclear", "desc": "", "image": "nuclear.jpeg", "userIds": [4] },
    { "id": "3", "name": "Iglesia", "desc": "", "image": "church.jpg", "userIds": [1, 2, 5] }];

    constructor() {
        console.log('Hello GroupsComponent Component');
    }
}