
import {
    Component, OnInit, Input
} from '@angular/core';

@Component({
    selector: 'salt-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent{
    constructor(){}
    @Input() value: string;
    @Input() class: string;
}
