import {HorseDto, HorseDtoStore} from "./HorseDtoStore";
import {HorseComp} from "./HorseComp";

describe('HorseDtoStoreAdd', () => {

  let horseComp:HorseComp;

  beforeEach(() => {
    horseComp= new HorseComp();
  });

  it('addOne', () => {
    // horseComp.horseDtoStore.addOne(new HorseDto({id:'1',name:'name 1'}));
    // expect('1').toEqual( horseComp.horseDtoStore.getState().dtoList[0].id);
  });

  it('addList', () => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})])
    // expect('1').toEqual(horseComp.horseDtoStore.getState().dtoList[0].id);
    // expect('2').toEqual(horseComp.horseDtoStore.getState().dtoList[1].id);
  });

});
