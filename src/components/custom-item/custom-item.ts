import { Component, Input } from '@angular/core';

/**
 * Generated class for the CustomItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'custom-item',
    templateUrl: 'custom-item.html'
})
export class CustomItemComponent {

    @Input()
    data;

    constructor() {
        console.log('Hello CustomItemComponent Component');
    }

    private getCompleteUrl() {
        return "images/" + this.data.user.image;
    }
}