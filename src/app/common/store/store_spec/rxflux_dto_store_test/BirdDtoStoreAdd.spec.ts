import {BirdDto} from "./BirdDtoStore";
import {BirdComp} from "./BirdComp";

describe('BirdDtoStore_Add', () => {

  let birdComp:BirdComp;

  beforeEach(() => {
    birdComp= new BirdComp();
  });

  it('add', () => {
    // birdComp.birdDtoStore.add(new BirdDto({id:'1',name:'name 1'}))
    // expect('1').toEqual(birdComp.birdDtoStore.getDto()?.id??'null obj');
  });

});
