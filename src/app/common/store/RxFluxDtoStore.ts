import {RxFluxStore, StateVersion} from "./RxFluxStore";
import {map, Observable} from "rxjs";

// DTO is any Dto
export class RxFluxDtoState<DTO> extends StateVersion{

  // list of dto
  dto: DTO;

  constructor(o? :Partial<RxFluxDtoState<DTO>>){
    super();
    Object.assign(this,o)
  }
}

// opinionated state management library for single dto ,
export class RxFluxDtoStore<DTO> extends RxFluxStore<RxFluxDtoState<DTO>>{

  constructor(dto : DTO) {
    super(new RxFluxDtoState<DTO>({dto : dto}));
  }

  /**
   * add single dto
   * @param dtoList  [{id:1,name:'name 1'},{id:2,name:'name 2'},]
   * @return true
   */
  add(dto:DTO){
    try{
      const nuclearDtoState: RxFluxDtoState<DTO>=  this.getState();
      nuclearDtoState.dto = JSON.parse(JSON.stringify(dto));
      this.setState(nuclearDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }


  /**
   * update by prop
   * @param dto  {id:1,name:'name 1'}
   * @param prop example 'id'
   * @return
   */
  update(dto:DTO){
    try{
      const nuclearDtoState: RxFluxDtoState<DTO>=  this.getState();
      nuclearDtoState.dto = JSON.parse(JSON.stringify(dto));
      this.setState(nuclearDtoState);
      return true;
    }catch(e){
      console.error(e);
      return false;
    }
  }

  getDto(): DTO {
    const nuclearDtoState: RxFluxDtoState<DTO>=  this.getState();
    return nuclearDtoState.dto;
  }

  getDto$(): Observable<DTO> {
    return this.getState$().pipe(
      map((e:RxFluxDtoState<DTO>)=> {
        return e.dto;
      })
    );
  }

  //todo get prev state dto
}
