import {HorseComp} from "./HorseComp";

describe('HorseDtoStoreConstructor', () => {

  let horseComp:HorseComp;

  beforeEach(() => {
    horseComp= new HorseComp();
  });

  it('construct', () => {
    // console.log(horseComp.horseDtoStore.getState());
    // expect(100000000).toBeLessThan(horseComp.horseDtoStore.getState().version);
  });

});
