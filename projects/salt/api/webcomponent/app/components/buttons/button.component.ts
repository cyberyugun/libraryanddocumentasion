
import {
    Component, OnInit, Input
} from '@angular/core';

@Component({
    selector: 'salt-button',
    templateUrl: './button.component.html'
})

export class ButtonComponent{
    constructor(){}
    @Input() value: string;
}
