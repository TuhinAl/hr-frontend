import { Component, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'ng-select-rx-auto',
  templateUrl: './ng-select-rx-auto.component.html'
})
export class NgSelectRxAutoComponent implements OnInit, ControlValueAccessor {

  @Input() optionList: any[];

  selectedValues: any;
  selectAllFlag = false;

  @ViewChild('combo', { static: true }) combo;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {}

  writeValue(obj: any): void {
    if(Array.isArray(obj)){
      this.selectedValues = [...obj];
      this.selectAllFlag = this.selectedValues.length === obj.length;
    }else{
      this.selectedValues = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleCheckAll(values: any) {
    if (values.currentTarget.checked) {
      const newList = this.optionList.map((x) => x.id);
      this.selectedValues = [...newList];
      this.onChange([...newList]);
    } else {
      this.selectedValues = [];
      this.onChange([]);
    }
  }

  onChange(event) {
    //debugger;
  }

  onTouched() {}

  onSelectionChange(selectedItems) {
    if (Array.isArray(selectedItems)) {
      const newList = selectedItems.map((x) => x.id);
      this.selectedValues = [...newList];
      this.selectAllFlag = this.optionList.length === this.selectedValues.length;
      this.onChange([...newList]);
    }
    this.onTouched();
  }

  getItem() {
    return 'abc'
  }
}
