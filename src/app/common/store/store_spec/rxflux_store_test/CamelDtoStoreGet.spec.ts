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

  it('getCamelDtoByPropVal1', () => {
    const camelDto1 : CamelDto|null= new CamelDto({id:'1',name:'name 1'});
    camelDtoStore0.addCamelDto(camelDto1);
    const camelDto2 : CamelDto|null= camelDtoStore0.getCamelDtoByPropVal('id','1')
    expect(camelDto2?.id).toEqual( camelDto2?.id);
  });

  it('getCamelDtoByPropVal2', () => {
    const camelDto1: CamelDto= new CamelDto({id:'1',name:'name 1'});
    const camelDto2: CamelDto= new CamelDto({id:'2',name:'name 2'});
    camelDtoStore0.addCamelDtoList([{...camelDto1}, {...camelDto2}]);
    const camelDto:CamelDto|null = camelDtoStore0.getCamelDtoByPropVal('id','2');
    expect('1').toEqual(camelDto?.id??'');
    expect('name 1').toEqual(camelDto?.name??'');
  });

  it('getCamelDtoList', () => {
    const camelDto1: CamelDto= new CamelDto({id:'1',name:'name 1'});
    const camelDto2: CamelDto= new CamelDto({id:'2',name:'name 2'});
    camelDtoStore0.addCamelDtoList([{...camelDto1}, {...camelDto2}]);
    const camelDtoList:Array<CamelDto> = camelDtoStore0.getCamelDtoList();
    expect('1').toEqual(camelDtoList[0]?.id??'');
    expect('name 1').toEqual(camelDtoList[0]?.name??'');
  });

});
