import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CustomTimePickerCompService} from "./CustomTimePickerCompService";
import {TimeIn12Hour} from "./TimeIn12Hour";

@Component({
  selector: 'CustomTimePickerComp',
  templateUrl: './CustomTimePickerComp.html',
  styleUrls: ['./CustomTimePickerComp.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomTimePickerComp),
    multi: true
  }]
})
export class CustomTimePickerComp implements OnInit, ControlValueAccessor {

  @Input() formControlName: string;
  @Input() disabled: boolean = false;

  timeIn24h: string | null = null;
  timeIn12h: TimeIn12Hour = new TimeIn12Hour(null, null, null, null);

  control: AbstractControl | null;
  required = false;
  errorWithMessage: Array<{ errorName: string, errorMessage: string }> = [];

  propagateChangeFn = (_: any) => {
  };
  propagateTouchFn = (_: any) => {
  };

  constructor(private controlContainer: ControlContainer, public customTimePickerCompService: CustomTimePickerCompService) {
  }

  ngOnInit() {
    this.control = (<FormGroup>this.controlContainer.control).get(this.formControlName);
    //this.required = this.control ? this.hasRequiredField(this.control) : false;
    if (!this.control) {
      throw new Error('provide form control');
    }
  }

  writeValue(obj: any): void {
    if(obj===null){
      this.timeIn24h = obj;
      this.timeIn12h = this.customTimePickerCompService.convertTo12h(this.timeIn24h);
    }
    if (obj && obj.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)) {
      this.timeIn24h = obj;
      this.timeIn12h = this.customTimePickerCompService.convertTo12h(this.timeIn24h);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouchFn = fn;
  }

  onChangeHour($event: Event, hour: string) {
    //console.log(hour)
    if (hour == "Hour") {
      return
    }
    this.timeIn12h.hour = hour;
    this.propagateChangeFn(this.customTimePickerCompService.convertTo24h(this.timeIn12h));
    this.propagateTouchFn(this.customTimePickerCompService.convertTo24h(this.timeIn12h));
  }

  onChangeMinute($event: Event, minute: string) {
    if (minute == "Min") {
      return
    }
    this.timeIn12h.minute = minute;
    this.propagateChangeFn(this.customTimePickerCompService.convertTo24h(this.timeIn12h));
    this.propagateTouchFn(this.customTimePickerCompService.convertTo24h(this.timeIn12h));
  }

  onChangeApm($event: Event, apm: string) {
    if (apm == "AM/PM") {
      return
    }
    this.timeIn12h.apm = apm;
    this.propagateChangeFn(this.customTimePickerCompService.convertTo24h(this.timeIn12h));
    this.propagateTouchFn(this.customTimePickerCompService.convertTo24h(this.timeIn12h));
  }

}
