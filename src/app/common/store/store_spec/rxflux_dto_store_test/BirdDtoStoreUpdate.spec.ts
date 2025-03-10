import {BirdDto} from "./BirdDtoStore";
import {BirdComp} from "./BirdComp";

describe('BirdDtoStore_Update', () => {

  let birdComp:BirdComp;

  beforeEach(() => {
    birdComp= new BirdComp();
  });

  it('update', () => {
    // birdComp.birdDtoStore.add(new BirdDto({id:'1',name:'name 1'}))
    // birdComp.birdDtoStore.update(new BirdDto({id:'1',name:'name 2'}))
    // const birdDto: BirdDto|null = birdComp.birdDtoStore.getDto()
    // expect('name 2').toEqual(birdDto?.name??'for null obj');
  });

});
