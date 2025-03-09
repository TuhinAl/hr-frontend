import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { filter, Observable, Subject } from 'rxjs';
import { PrescriptionInvestigationDto } from "../../../module/prescription/dto/prescription-investigation-dto";
import { uniqueObjList } from '../../util-old/single-collection-util';


@Component({
  selector: 'AutoSearchFavInvestigationComp',
  templateUrl: './AutoSearchFavInvestigationComp.html',
  styleUrls: ['./AutoSearchFavInvestigationComp.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoSearchFavInvestigationComp),
    multi: true
  }]
})
export class AutoSearchFavInvestigationComp implements OnInit, ControlValueAccessor {

  @Input() autoSearchNumber: string = '2';

  selectedValues: any;
  selectAllFlag = false;
  @ViewChild('combo', { static: true }) combo;
  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;

  @Input() formControlName: string;
  @Input() selectedList: Array<any> | null;
  @Input() enableAddNew:string = 'true';

  @Output() onTouch = new EventEmitter();
  @Output() updateOptionList = new EventEmitter();
  @Output() addFav = new EventEmitter();
  @Output() onSelectEmitSelectedList = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  parentForm: FormGroup;
  //data: any;
  control: AbstractControl|null;
  required = false;
  errorWithMessage = [];
  model:any;
  autoSearchValueSubj = new Subject<string>();
  resultList: Observable<any>;
  loading:boolean = false;


  constructor(private controlContainer: ControlContainer) {  }

  //constructor(@Self() public ngControl: NgControl) {this.ngControl.valueAccessor = this;}

  @Input() optionList$: Observable<any[]>

  ngOnInit() {
    this.getList();
    this.parentForm = this.controlContainer.control as FormGroup;
    this.control = this.parentForm.get(this.formControlName);
    if (!this.control) {
      throw new Error('Form Field input component must be a part of a form group');
    }
  }

  getList(): void {
    this.autoSearchValueSubj.pipe( filter(res => {
      return res !== null && res.trim() !== '' && res.length >= Number(this.autoSearchNumber)
    })).subscribe(res => {
      //console.log('calling with',res);
      this.updateOptionList.emit(res);
    }, err => {});
  }

  writeValue(obj: any): void {
    // console.log(typeof obj);
    // console.log(obj);
    if(Array.isArray(obj)){
      this.selectedValues = [...obj];
      this.selectAllFlag = this.selectedValues.length === obj.length;
    }else{
      this.selectedValues = obj;
    }
  }

  /*writeValue(obj: any): void {
    this.data = obj;
  }*/

  /*registerOnChange(fn: any): void {
    this.onChange = fn;
  }*/
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  /*registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }*/
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }
  propagateChange = (_: any) => { };
  propagateTouch = (_: any) => { };

  toggleCheckAll(values: any) {
    /*if (values.currentTarget.checked) {
      const newList = this.optionList.map((x) => x.id);
      this.selectedValues = [...newList];
      this.onChange([...newList]);
    } else {
      this.selectedValues = [];
      this.onChange([]);
    }*/
  }

  onTouched($event: FocusEvent) {
    this.onTouch.emit($event)
  }

  onSelectionChange(selectedItems:Array<PrescriptionInvestigationDto>) {
    this.onSelectEmitSelectedList.emit(uniqueObjList(selectedItems, 'id'));
  }


  /*on change, we can propagate the events to the registered handlers,
  which should set the form field errors
  and at the end we can check the reference to the control for those errors to display the error messages*/
  /*public onChange(event) {
    this.data = event ? event.target.value : this.data;
    this.propagateChange(this.data);
    this.propagateTouch(this.data);
  }*/

  onRemoveFn($event: any) {
    //console.log('auto onRemoveFn', $event);
    this.onRemove.emit($event);
  }

  customSearchFn(term: string) {
    console.log('auto customSearchFn: ',term);
    //console.log(item);
  }

  private setError() {
    this.errorWithMessage = [];
    if (this.control && this.control.errors){
      for (const [key, value] of Object.entries(this.control.errors)) {
        //this.errorWithMessage.push();
      }
    }
  }

  addTag(tag: string) {
    //console.log('auto addTag: ', tag);
    /*if(this.selectedList){
      this.selectedList = addObjToList(this.selectedList ,
        new PrescriptionInvestigationDto({
          id: 'Temp###'+ Date.now() + Math.floor(Math.random() * 999999),
          userInput: tag
        })
      );
    }*/

    //this.ngSelectComponent.clearModel();
    //this.ngSelectComponent.handleClearClick();
    this.ngSelectComponent.filter('');

    this.onSelectEmitSelectedList.emit(this.selectedList);
    //this.combo.nativeElement.value = null;
  }


  addToFavourite(item: any) {
    this.addFav.emit(item)
    //console.log('auto addToFavourite: ',item);
  }

}
