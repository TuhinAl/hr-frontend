
export class BirdDto{

  id: string;
  name: string;

  constructor(o? :Partial<BirdDto>){
    Object.assign(this,o)
  }
}

export class BirdDtoStore /*extends NuclearDtoStore<BirdDto>*/{

  //birdDtoStore:NuclearDtoStore<BirdDto>= new NuclearDtoStore<BirdDto>();

  constructor(dto = new BirdDto()) {
    //super(dto);
    //const birdDtoStore: NuclearDtoStore<BirdDto> = new NuclearDtoStore<BirdDto>();
  }

}
