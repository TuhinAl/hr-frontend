import { Component, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'ng-select-rx',
  templateUrl: './ng-select-rx.component.html'
})
export class NgSelectRxComponent implements OnInit, ControlValueAccessor {

  @Input() optionList: any[];

  selectedValues: any;
  selectAllFlag = false;
  //@ViewChild('combo', { static: true }) combo;

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

  onChange(event: Array<any>) {
    //debugger;
  }

  onTouched() {}

  onSelectionChange(selectedItems:any) {
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
