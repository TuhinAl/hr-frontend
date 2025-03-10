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


  it('updateCamelDtoWithoutUpdateFn', () => {
    const camelDto1: CamelDto= new CamelDto({id:'1',name:'name 1'});
    const camelDto2: CamelDto= new CamelDto({id:'2',name:'name 2'});
    camelDtoStore0.addCamelDtoList([{...camelDto1}, {...camelDto2}]);
    const changeCamelDto: CamelDto= new CamelDto({id:'1',name:'name 3'});
    camelDtoStore0.updateCamelDtoWithoutUpdateFn(changeCamelDto,'id');
    expect('1').toEqual(camelDtoStore0.state.camelDtoList[0].id);
    expect('name 1').toEqual(camelDtoStore0.state.camelDtoList[0].name);
  });

  it('updateCamelDto', () => {
    const camelDto1: CamelDto= new CamelDto({id:'1',name:'name 1'});
    const camelDto2: CamelDto= new CamelDto({id:'2',name:'name 2'});
    camelDtoStore0.addCamelDtoList([{...camelDto1}, {...camelDto2}]);
    const changeCamelDto: CamelDto= new CamelDto({id:'1',name:'name 3'});
    camelDtoStore0.updateCamelDto(changeCamelDto,'id');
    expect('1').toEqual(camelDtoStore0.state.camelDtoList[0].id);
    expect('name 1').toEqual(camelDtoStore0.state.camelDtoList[0].name);
  });

  it('deleteCamelDto', () => {
    const camelDto1: CamelDto= new CamelDto({id:'1',name:'name 1'});
    const camelDto2: CamelDto= new CamelDto({id:'2',name:'name 2'});
    camelDtoStore0.addCamelDtoList([{...camelDto1}, {...camelDto2}]);
    console.log(camelDtoStore0.deleteCamelDto("id",'1'))
    console.log(camelDtoStore0.state);
    expect('2').toEqual(camelDtoStore0.state.camelDtoList[0].id);
    expect('name 2').toEqual(camelDtoStore0.state.camelDtoList[0].name);
  });


});
