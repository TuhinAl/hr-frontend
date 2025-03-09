import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {filter, Observable, ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'MultiSelectFavAutoSearchComp',
  templateUrl: './MultiSelectFavAutoSearchComp.html',
  styleUrls: ['./MultiSelectFavAutoSearchComp.scss'],
})
export class MultiSelectFavAutoSearchComp implements OnInit {

  selectedListT: Array<any> = [];
  autoSearchValueSubj = new Subject<string>();

  @Input() autoSearchNumber: string = '2';
  @Input() enableAddNew:string = 'true';
  @Input() optionListRSubj:ReplaySubject<Array<any>> ;

  @Input() selectedListFromStore$: Observable<Array<any>> = new Observable<Array<any>>();
  @Input() tagFn:(e)=>{};

  @Output() onTouchEmitter = new EventEmitter();
  @Output() getOptionListBySearchValEmitter = new EventEmitter();
  @Output() addToFavEmitter = new EventEmitter();
  @Output() lastSelectedEmitter = new EventEmitter();
  @Output() allSelectedEmitter = new EventEmitter();
  @Output() onRemoveEmitter = new EventEmitter();
  @Output() onClearAllEmitter = new EventEmitter();

  constructor(private notify: ToastrService) { }

  ngOnInit() {
    this.getList();
    this.watchSelectedList();
  }

  watchSelectedList(): void {
    this.selectedListFromStore$.subscribe((e:Array<any>)=>{
      this.selectedListT = e.filter(e => !!e['enabled']);
    })
  }

  getList(): void {
    this.autoSearchValueSubj.pipe( filter(res => {
      return res !== null && res.trim() !== '' && res.length >= Number(this.autoSearchNumber)
    })) .subscribe(res => {
      this.getOptionListBySearchValEmitter.emit(res);
    });
  }

  onTouch($event: FocusEvent) {
    this.onTouchEmitter.emit($event);
  }

  onSelectFromOptionList(list:Array<any>) {
    if(list.length === 0){
      console.error("select at least one");
    }
    if(list.length===1){
      const lastSelectedItem = list[list.length-1]
      this.lastSelectedEmitter.emit(lastSelectedItem);
      this.allSelectedEmitter.emit(list);
    }
    if(list.length>1){
      const listWithOutLastElement = list.slice(0, list.length-1);
      const lastSelectedItem = list[list.length-1]
      if(listWithOutLastElement.find(e=> e['displayProp'].toLowerCase() === lastSelectedItem['displayProp'].toLowerCase()) ){
        this.selectedListT = JSON.parse(JSON.stringify(listWithOutLastElement))
        this.notify.warning("Duplicate found can not add","Message");
      }else{
        this.lastSelectedEmitter.emit(lastSelectedItem);
        this.allSelectedEmitter.emit(list);
      }
    }
  }

  addNewFromNgSelect(tag: string):any {
    if(this.selectedListT.find(e=> e['displayProp'].toLowerCase() === tag.toLowerCase()) ){
      this.notify.warning("Duplicate found can not add","Message");
      return;
    }
    return this.tagFn(tag);
  }

  addToFavourite(item: any) {
    this.addToFavEmitter.emit(item);
  }

  removeItem(item: any) {
  //  console.log(item)
    this.onRemoveEmitter.emit(item);
  }

  clear() {
    this.onClearAllEmitter.emit(true);
  }
}
