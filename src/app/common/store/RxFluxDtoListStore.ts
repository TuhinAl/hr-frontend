import {map, Observable} from "rxjs";
import {RxFluxStore, StateVersion} from "./RxFluxStore";

export class RxFluxDtoListState<DTO> extends StateVersion{

  dtoList: Array<DTO>;

  constructor(o? :Partial<RxFluxDtoListState<DTO>>){
    super();
    Object.assign(this,o)
  }
}

// opinionated state management library for dto list,
export class RxFluxDtoListStore<DTO> extends RxFluxStore<RxFluxDtoListState<DTO>>{

  constructor(dtoList : Array<DTO>  = []) {
    super(new RxFluxDtoListState<DTO>({dtoList : dtoList}));
  }

  /**
   * add single dto in list
   * @param dtoList  [{id:1,name:'name 1'},{id:2,name:'name 2'},]
   * @return true
   */
  addOne(dto:DTO){
    try{
      const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
      rxFluxDtoState.dtoList = [...rxFluxDtoState.dtoList, {...dto}];
      this.setState(rxFluxDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }

  /**
   * add dto list in existing dto list
   * @param dtoList  [{id:1,name:'name 1'},{id:2,name:'name 2'},]
   * @return true
   */
  addList(dtoList:Array<DTO>): boolean{
    try{
      const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
      rxFluxDtoState.dtoList = [...rxFluxDtoState.dtoList, ...dtoList];
      this.setState(rxFluxDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }

  /**
   * add new dto list to store replacing old list
   * @param dtoList  [{id:1,name:'name 1'},{id:2,name:'name 2'},]
   * @return true
   */
  addNewList(dtoList:Array<DTO>): boolean{
    try{
      const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
      rxFluxDtoState.dtoList =  JSON.parse(JSON.stringify(dtoList));;
      this.setState(rxFluxDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }

  /**
   * update by prop
   * existing  [{id:'1',name:'name1'},{id:'2',name:'name2'},{id:'3',name:'name3'}]
   * @param dto  {id:2,name:'name 10'}
   * @param prop example 'id'
   * @param val example '3'
   * @return [{id:'1',name:'name1'},{id:'2',name:'name2'},{id:'2',name:'name 10'}]
   */
  update(dto:DTO, prop:string,val:string|number){
    try{
      const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
      const index:number = rxFluxDtoState.dtoList.findIndex((e) => e[prop] === val);
      if(index>=0){
        rxFluxDtoState.dtoList[index] = dto;
      }
      this.setState(rxFluxDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }


  delete(prop:string,val:string){
    try{
      const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
      const index:number = rxFluxDtoState.dtoList.findIndex((e) => e[prop] ===val);
      if(index>=0){
        rxFluxDtoState.dtoList.splice(index,1)
      }
      this.setState(rxFluxDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }

  getList(): Array<DTO> {
    const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
    return rxFluxDtoState.dtoList;
  }

  getList$(): Observable<Array<DTO>> {
    return this.getState$().pipe(
      map((e:RxFluxDtoListState<DTO>)=> {
        return e.dtoList;
      })
    );
  }

  getListByPropValList(prop:string, list:Array<string|number>): Array<DTO> {
    const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
    return rxFluxDtoState.dtoList.filter((e:DTO) => list.findIndex((i:string|number) => i === e[prop]) >= 0  );
  }

  getFirstByPropVal(prop:string, val:string|number): DTO | null {
    const rxFluxDtoState: RxFluxDtoListState<DTO>=  this.getState();
    const t:Array<DTO> = rxFluxDtoState.dtoList.filter((e:DTO) => val === e[prop])
    if(t.length > 0  ){
      return t[0]
    }else{
      return null;
    }
  }

  getListByPropValList$(prop:string,list:Array<string|number>): Observable<Array<DTO>> {
    return this.getState$().pipe(
      map((o:RxFluxDtoListState<DTO>)=> {
        const dtoList1:Array<DTO> = o.dtoList.filter((e:DTO) => (list.findIndex((i:string|number) => i === e[prop])) >= 0 );
        return dtoList1;
      })
    );
  }

  getListByPropValAutoComplete(prop:string,val:string): Array<DTO> {
    const rxFluxDtoState: RxFluxDtoListState<DTO> =  this.getState();
    return rxFluxDtoState.dtoList.filter((e:DTO) => (<string>e[prop]).toLowerCase().includes(val));
  }

  getListByPropValAutoComplete$(prop:string,val:string): Observable<Array<DTO>> {
    return this.getState$().pipe(
      map((o:RxFluxDtoListState<DTO>)=> {
        const dtoList1:Array<DTO> = o.dtoList.filter((e:DTO) =>  (<string>e[prop]).toLowerCase().includes(val) );
        return dtoList1;
      })
    );
  }

}
