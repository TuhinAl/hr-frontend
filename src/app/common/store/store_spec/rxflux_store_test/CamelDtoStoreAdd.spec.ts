import {CamelDto, CamelDtoStore, CamelState} from "./CamelDtoStore";

describe('CamelDtoStoreTest', () => {

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

  it('addCamelDto', () => {
    const camelDto : CamelDto= new CamelDto({id:'1',name:'name 1'});
    camelDtoStore0.addCamelDto(camelDto);
    expect(camelDto.id).toEqual(camelDtoStore0.state.camelDtoList[0].id);
    expect(camelDto.name).toEqual(camelDtoStore0.state.camelDtoList[0].name);
  });

  it('addCamelDtoList', () => {
    const camelDto1: CamelDto= new CamelDto({id:'1',name:'name 1'});
    const camelDto2: CamelDto= new CamelDto({id:'2',name:'name 2'});
    camelDtoStore0.addCamelDtoList([camelDto1,camelDto2]);

    expect(camelDto1.id).toEqual(camelDtoStore0.state.camelDtoList[0].id);
    expect(camelDto1.name).toEqual(camelDtoStore0.state.camelDtoList[0].name);
    expect(camelDto2.id).toEqual(camelDtoStore0.state.camelDtoList[1].id);
    expect(camelDto2.name).toEqual(camelDtoStore0.state.camelDtoList[1].name);
  });

});
