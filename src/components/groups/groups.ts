import { Component, OnInit} from '@angular/core';
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
export class GroupsComponent implements OnInit {

    private groups;

    constructor(private groupsProvider: GroupsProvider, public navCtrl: NavController) {
        
    }

    ngOnInit() {
        this.groupsProvider.getGroups().subscribe(
            data => {
                this.groups = data;
            },
            err => {
                console.log(err.message);
            }
        );
    }

    private showChatPage($event) {
        this.navCtrl.push(ChatPage, {
            group: $event
        })
    }
}