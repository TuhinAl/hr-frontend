import {Directive, ElementRef, HostListener} from '@angular/core';
import { NgControl } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[formControlName][appTimeMask]',
})
export class TimeMaskDirective {

  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    let inputValue = inputElement.value.replace(" ", "");
    let formattedTime = '';
    if(inputValue.length == 2) {
      formattedTime = inputValue.replace(/^(\d{0,2})/, '$1:');
    } else if(inputValue.length > 3  && this.isContainsAorP(inputValue)) {
      formattedTime = this.formatTime(inputValue.replace('a', ' A').replace('p', ' P'));
    } else if(inputValue.length > 6) {
      formattedTime = this.formatTime(inputValue.replace(/[^0-9]+/g, "") + ' AM');
    } else {
      formattedTime = this.formatTime(inputValue);
    }
    this.control.control?.setValue(formattedTime.toUpperCase(), { emitEvent: false });
  }

  formatTime(timeString: string): string {
    const parsedTime = moment(timeString, 'hh:mm A', true);
    if (parsedTime.isValid()) {
      return parsedTime.format('hh:mm A');
    }
    return timeString;
  }

  isContainsAorP(inputString: string) {
    return inputString.toLowerCase().indexOf('a') !== -1
      || inputString.toLowerCase().indexOf('A') !== -1
      || inputString.toLowerCase().indexOf('p') !== -1
      || inputString.toLowerCase().indexOf('P') !== -1;
  }
}
