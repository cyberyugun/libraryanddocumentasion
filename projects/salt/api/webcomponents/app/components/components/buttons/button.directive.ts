
import {
    Component,
    Directive,
    HostListener,
    Input,
    Output,
    Provider,
    OnInit,
    HostBinding
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[buttonCheckbox]',
})

export class ButtonDirective implements ControlValueAccessor, OnInit {
    @Input() btnCheckboxTrue = true;
    @Input() btnCheckboxFalse = false;

    @HostBinding('class.active')
    state = false;

    protected value: any;
    protected isDisable: boolean;

    @HostListener('click') onClick(): void {
        if (this.isDisable) {
            return;
        }
        this.toggle(!this.state);
    }

    // Set when init call the toggle function
    ngOnInit() {
        this.toggle(this.getTrueVal === this.value);
    }

    // Get value and validation value
    protected getTrueVal(): boolean {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue : true;
    }
    protected getFalseVal(): boolean {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse : false;
    }

    // Function for toggle value
    toggle(state: boolean): void {
        this.state = state;
        this.value = this.state ? this.getTrueVal : this.getFalseVal;
    }

    writeValue(value: any ): void {
        this.state = this.getTrueVal === value;
        this.value = value ? this.getTrueVal : this.getFalseVal;
    }

    setDisabledState(): void {}
    registerOnChange(fn: () => {}): void {}
    registerOnTouched(fn: () => {}): void {}
}
