import {RxFluxStore, StateVersion} from "../../RxFluxStore";

export class CamelDto{
  id: string;
  name: string;

  constructor(o? :Partial<CamelDto>){
    Object.assign(this,o)
  }
}


export class CamelState extends StateVersion{

  camelDtoList: Array<CamelDto>;

  constructor(o? :Partial<CamelState>){
    super()
    Object.assign(this,o)
  }
}

// Mock CamelDtoStore, direct extending RxFluxStore
export class CamelDtoStore extends RxFluxStore<CamelState> {

  constructor() {
    super(new CamelState({camelDtoList: []}))
  }

  addCamelDto(camelDto: CamelDto): void {
    this.updateState({...this.state, camelDtoList: [...this.state.camelDtoList, camelDto]});
  }

  addCamelDtoList(camelDtoList: Array<CamelDto>): void {
    this.updateState({...this.state, camelDtoList: [...this.state.camelDtoList, ...camelDtoList]});
  }

  updateCamelDtoWithoutUpdateFn(camelDto: CamelDto,prop:string): void {
    const itemIndex = this.state.camelDtoList.findIndex(item => item[prop] === camelDto[prop]);
    if(itemIndex!= -1){
      // Object.assign and spread operator does not work on deep copy
      // so using JSON.parse(JSON.stringify(obj))
      this.state.camelDtoList[itemIndex] = camelDto;
    }
  }

  updateCamelDto(camelDto: CamelDto,prop:string): void {
    const itemIndex = this.state.camelDtoList.findIndex(item => item[prop] === camelDto[prop]);
    if(itemIndex!== -1){
      this.state.camelDtoList[itemIndex] = camelDto
      this.updateState({...this.state});
    }
  }

  deleteCamelDto(prop: string, value:any): boolean {
    const state = this.state;
    const camelDtoList:Array<CamelDto> = this.state.camelDtoList.filter(item => item[prop] !== value);
    console.log(camelDtoList);
    state.camelDtoList = camelDtoList;
    this.updateState({...state});
    return true;
    //   this.state.camelDtoList.splice(itemIndex, 1)
    //   this.updateState({...this.state});
  }

  getCamelDtoByPropVal(prop:string,value:any):CamelDto | null {
    const itemIndex = this.state.camelDtoList.findIndex(item => item[prop] === value);
    if(itemIndex){
      return this.state.camelDtoList[0]
    }
    return null;
  }

  getCamelDtoList():Array<CamelDto>{
    return this.state.camelDtoList;
  }

}
