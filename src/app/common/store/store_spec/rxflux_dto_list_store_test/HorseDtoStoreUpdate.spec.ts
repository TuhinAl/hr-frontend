import {HorseDto, HorseDtoStore} from "./HorseDtoStore";
import {HorseComp} from "./HorseComp";

describe('HorseDtoStoreUpdate', () => {

  let horseComp:HorseComp;

  beforeEach(() => {
    horseComp= new HorseComp();
  });

  it('update', () => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})])
    // horseComp.horseDtoStore.update(new HorseDto({id:'1',name:'name 2'}),'id','1')
    // expect('name 2').toEqual(horseComp.horseDtoStore.getState().dtoList[0].name);
  });

  it('delete', () => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})])
    // horseComp.horseDtoStore.delete('id','1')
    // expect('name 2').toEqual(horseComp.horseDtoStore.getState().dtoList[0].name);
  });

});
