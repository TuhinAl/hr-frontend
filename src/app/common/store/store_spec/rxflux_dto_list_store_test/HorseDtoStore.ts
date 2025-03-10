//import {NgRxFluxDtoListStore} from "../../NuclearDtoListStore";


export class HorseDto{

  id: string;
  name: string;

  constructor(o? :Partial<HorseDto>){
    Object.assign(this,o)
  }
}

// Horse component will extend HorseDtoStore
// Mock HorseDtoStore, extending NuclearDtoStore
export class HorseDtoStore /*extends NgRxFluxDtoListStore<HorseDto>*/ {

  constructor(horseDtoList:Array<HorseDto>=[]) {
    //super(horseDtoList)
  }
}
