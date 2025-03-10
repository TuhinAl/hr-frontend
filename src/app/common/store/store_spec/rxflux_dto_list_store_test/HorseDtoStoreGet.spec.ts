import {HorseDto, HorseDtoStore} from "./HorseDtoStore";
import {HorseComp} from "./HorseComp";

describe('HorseDtoStoreGet', () => {

  let horseComp:HorseComp;

  beforeEach(() => {
    horseComp= new HorseComp();
  });

  it('getList', () => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})])
    // console.log(horseComp.horseDtoStore.getList()[0]?.id??null )
    // expect(1).toEqual(1);
  });

  it('getList$_1', (done: DoneFn) => {
    // horseComp.horseDtoStore.getList$().subscribe({
    //   next: (horseDtoList:Array<HorseDto> )=> {
    //     expect('empty horse').toEqual(horseDtoList[0]?.id??'empty horse');
    //     done();
    //   },
    //   error: done.fail
    // });
  });

  it('getList$_2', (done: DoneFn) => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})]);
    // horseComp.horseDtoStore.getList$().subscribe({
    //   next: (horseDtoList:Array<HorseDto> )=> {
    //     expect('1').toEqual(horseDtoList[0]?.id??'empty horse');
    //     done();
    //   },
    //   error: done.fail
    // });
  });

  it('getListByPropValList', () => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'})
    //   ,new HorseDto({id:'2',name:'name 2'}) ,new HorseDto({id:'3',name:'name 3'})])
    // const  horseDtoList: Array<HorseDto>= horseComp.horseDtoStore.getListByPropValList('id',['2','3']);
    // expect('2').toEqual(horseDtoList[0].id);
    // expect('3').toEqual(horseDtoList[1].id);
  });

  it('getListByPropValList$', (done: DoneFn) => {
    // horseComp.horseDtoStore.getListByPropValList$('id',['2','3']).subscribe({
    //   next: (horseDtoList:Array<HorseDto> )=> {
    //     console.log(horseDtoList)
    //     expect(horseDtoList.length === 0).toBe(true)
    //     //expect(horseDtoList[0]?.id === '2').toBe(true)
    //     //expect(horseDtoList[1]?.id === '3').toBe(true)
    //     done();
    //   },
    //   error: done.fail
    // });
    //horseDtoStore0.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})]);
    //horseDtoStore0.addList([new HorseDto({id:'3',name:'name 3'}),new HorseDto({id:'4',name:'name 4'})]);
  });


  it('getListByPropValAutoComplete', () => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})])
    // const  horseDtoList: Array<HorseDto>= horseComp.horseDtoStore.getListByPropValAutoComplete('name','2');
    // expect('2').toEqual(horseDtoList[0].id);
  });

  it('getListByPropValAutoComplete$', (done: DoneFn) => {
    // horseComp.horseDtoStore.addList([new HorseDto({id:'1',name:'name 1'}),new HorseDto({id:'2',name:'name 2'})]);
    // horseComp.horseDtoStore.getListByPropValAutoComplete$('name','2').subscribe({
    //   next: (horseDtoList:Array<HorseDto> )=> {
    //     expect('2').toEqual(horseDtoList[0]?.id);
    //     done();
    //   },
    //   error: done.fail
    // });
    //horseDtoStore0.addList([new HorseDto({id:'3',name:'name 3'}),new HorseDto({id:'3',name:'name 3'})]);
  });

});
