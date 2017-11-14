import { Component } from '@angular/core';
import { Group, GroupsProvider } from '../../providers/groups/groups';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../pages/chat/chat';

/**
 * Generated class for the GroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'groups',
    templateUrl: 'groups.html',
    providers: [GroupsProvider]
})
export class GroupsComponent {

    private groups: Group[];

    constructor(groupsProvider: GroupsProvider, public navCtrl: NavController) {
        this.groups = groupsProvider.getGroups();
    }

    private showChatPage($event) {
        this.navCtrl.push(ChatPage, {
            group: $event
        })
    }
}