import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appDateMask]',
})
export class DateMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace) {

    if(event === null || event === undefined || event === ''){
      return;
    }
    if(typeof event === 'string'){
      // console.log(typeof event);
      // console.log(event);
      let newVal = event.replace(/\D/g, '');
      if (backspace && newVal.length <= 6) {
        newVal = newVal.substring(0, newVal.length - 1);
      }
      if (newVal.length === 0) {
        newVal = '';
      } else if (newVal.length <= 2) {
        newVal = newVal.replace(/^(\d{0,2})/, '$1/');
      } else if (newVal.length <= 4) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
      } else if (newVal.length <= 8) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
      } else {
        newVal = newVal.substring(0, 8);
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
      }
      this.ngControl?.valueAccessor?.writeValue(newVal);
    }
    if(typeof event === 'object'){
     /* const s:String = moment(event).format('DD/MM/YYYY');
      this.ngControl?.valueAccessor?.writeValue(s);*/
      console.log(typeof event);
      console.log(event);
    }
  }
}
