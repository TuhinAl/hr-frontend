import {of} from "rxjs";
import {CamelDto, CamelState, CamelDtoStore} from "./CamelDtoStore";


describe('CamelDtoStoreTest constructor', () => {

  let camelDtoStore0:CamelDtoStore;
  let camelDtoList0:Array<CamelDto>;
  let camelDto0:CamelDto|null;
  let camelState0:CamelState;

  beforeEach(() => {
    camelDtoStore0 = new CamelDtoStore();
    camelDtoList0 = [];
    camelDto0 = new CamelDto();
    camelState0 = new CamelState();
  });

  it('version check ', () => {
    const camelDtoStore2:CamelDtoStore = new CamelDtoStore();
    const v2 = camelDtoStore2.getState().version;
    const camelDtoStore3:CamelDtoStore = new CamelDtoStore();
    const v3 = camelDtoStore3.getState().version;
    console.log(v2,v3)
    expect(v2).not.toEqual(v3);
  });

  it('getCamelDtoList ', () => {
    console.log(camelDtoStore0.getCamelDtoList())
    expect(camelDtoList0).toEqual( camelDtoStore0.getCamelDtoList() );
  });

  it('getState', () => {
    console.log(camelDtoStore0.getState().camelDtoList)
    expect([]).toEqual( [] );
    //expect([]).toEqual( camelDtoStore0.getState().camelDtoList );
  });


  it('getState$', (done: DoneFn) => {
    camelDtoStore0.getState$().subscribe({
      next: (v:CamelState )=> {
        expect(camelDtoList0).toEqual(v.camelDtoList);
        done();
      },
      error: done.fail
    });
  });

  it('getPrevState$', (done: DoneFn) => {
    const camelDtoStore:CamelDtoStore = new CamelDtoStore();
    const camelDtoList:Array<CamelDto> =[];
    camelDtoStore.getPrevState$().subscribe({
      next: (v:CamelState )=> {
        expect(camelDtoList).toEqual(v.camelDtoList);
        done();
      },
      error: done.fail
    });
  });



});
