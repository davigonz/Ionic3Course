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

  text: string;

  constructor() {
    console.log('Hello GroupsComponent Component');
    this.text = 'Hello World';
  }

}
