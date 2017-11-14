import { Component, Input, Output, EventEmitter } from '@angular/core';

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

    @Output()
    cardClicked = new EventEmitter();

    constructor() {
        console.log('Hello BackgroundCardComponent Component');
    }

    private getCompleteUrl() {
        return "images/" + this.data.image;
    }

    private selectCard() {
        this.cardClicked.emit(this.data);
    }
}