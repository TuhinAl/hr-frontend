import {Directive, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[formControlName][appCapitalMask]',
})
export class CapitalMaskDirective {

  constructor(public ngControl: NgControl) {
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace) {
    if (event === null || event === undefined || event === '') {
      return;
    }
    let newVal = '';
    if (event.length === 0) {
      newVal = '';
    } else if (event.length >= 1) {
      newVal = event.charAt(0).toUpperCase() + event.slice(1);
    }
    this.ngControl?.valueAccessor?.writeValue(newVal);
  }
}
