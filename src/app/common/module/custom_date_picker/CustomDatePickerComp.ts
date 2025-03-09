import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import * as moment from 'moment';
import {pairwise, startWith, Subscription} from 'rxjs';

@Component({
  selector: 'CustomDatePickerComp',
  templateUrl: './CustomDatePickerComp.html',
  styleUrls: ['./CustomDatePickerComp.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDatePickerComp),
    multi: true
  }]
})
export class CustomDatePickerComp implements OnInit, ControlValueAccessor, OnDestroy {

  @Input() formControlName: string;
  @Input() disabled: boolean = false;
  @Input() futureAllowed: boolean = true;
  @Input() pastAllowed: boolean = true;

  minDate = new Date(new Date().getFullYear() - 300, 0, 1);
  maxDate = new Date(new Date().getFullYear() + 300, 0, 1);

  control: AbstractControl | null;
  required = false;
  errorWithMessage: Array<{ errorName: string, errorMessage: string }> = [];

  tempFg = new FormGroup({
    tempDateForText: new FormControl(null),
    tempDateForCalender: new FormControl(null),
  });
  valueChangesSub1: Subscription;
  valueChangesSub2: Subscription;

  propagateChangeFn = (_: any) => {
  };
  propagateTouchFn = (_: any) => {
  };

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.control = (<FormGroup>this.controlContainer.control).get(this.formControlName);
    //this.required = this.control ? this.hasRequiredField(this.control) : false;
    if (!this.control) {
      throw new Error('provide form control');
    }
    if (this.futureAllowed != true) {
      this.maxDate = new Date(new Date().getFullYear() , new Date().getMonth(), new Date().getDate());
    }
    if (this.pastAllowed != true) {
      this.minDate = new Date(new Date().getFullYear() , new Date().getMonth(), new Date().getDate());
    }
    this.valueChangesSub1 = this.tempFg.controls['tempDateForText'].valueChanges.pipe(startWith(null), pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        //console.log(prev, next)
        if (prev != next) {
          if (next && next.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
            this.propagateChangeFn(moment(next).format('YYYY-MM-DD'));
            this.tempFg.patchValue({tempDateForCalender: moment(next, 'DD/MM/YYYY').toDate()})
          } else {
            this.propagateChangeFn(null);
            this.tempFg.patchValue({tempDateForCalender: null})
          }
        }
      });
    this.valueChangesSub2 = this.tempFg.controls['tempDateForCalender'].valueChanges.pipe(startWith(null), pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        //console.log(prev, next)
        if (prev != next) {
          if (next) {
            this.propagateChangeFn(moment(next).format('YYYY-MM-DD'));
            this.tempFg.patchValue({tempDateForText: moment(next).format('DD/MM/YYYY')})
          } else {
            this.propagateChangeFn(null);
            this.tempFg.patchValue({tempDateForText: null})
          }
        }
      });
  }

  writeValue(val: any): void {
    if (val && val.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/)) {
      this.tempFg.patchValue({tempDateForText: moment(val).format('DD/MM/YYYY')})
    } else {
      this.tempFg.patchValue({tempDateForText: null})
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouchFn = fn;
  }

  ngOnDestroy(): void {
    this.valueChangesSub1.unsubscribe();
    this.valueChangesSub2.unsubscribe();
  }

}
