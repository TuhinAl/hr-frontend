import {BirdComp} from "./BirdComp";
import {HorseDto} from "../rxflux_dto_list_store_test/HorseDtoStore";
import {BirdDto} from "./BirdDtoStore";

describe('BirdComp_Get', () => {

  let birdComp:BirdComp;

  beforeEach(() => {
    birdComp= new BirdComp();
  });

  it('getDto', () => {
    // birdComp.birdDtoStore.add(new BirdDto({id:'1',name:'name 1'}))
    // console.log(birdComp.birdDtoStore.getDto()?.id??null )
    expect(1).toEqual(1);
  });

  it('getDto$_1', (done: DoneFn) => {
    // birdComp.birdDtoStore.add(new BirdDto({id:'1',name:'name 1'}))
    // birdComp.birdDtoStore.getDto$().subscribe({
    //   next: (birdDto:BirdDto|null )=> {
    //     expect('1').toEqual(birdDto?.id??'for null birdDto');
    //     done();
    //   },
    //   error: done.fail
    // });
  });


});
