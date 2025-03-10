import {BirdComp} from "./BirdComp";


describe('BirdComp_Constructor', () => {

  let birdComp:BirdComp;

  beforeEach(() => {
    birdComp= new BirdComp();
  });

  it('construct', () => {
    console.log(birdComp.birdDtoStore);
    //expect(100000000).toBeLessThan(birdComp.birdDtoStore.getState().version);
  });

});
