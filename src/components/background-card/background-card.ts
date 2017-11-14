import { Component, Input } from '@angular/core';

/**
 * Generated class for the BackgroundCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'background-card',
    templateUrl: 'background-card.html'
})
export class BackgroundCardComponent {

    @Input()
    data;

    constructor() {
        console.log('Hello BackgroundCardComponent Component');
    }

    private getCompleteUrl() {
        return "images/" + this.data.image;
    }
}