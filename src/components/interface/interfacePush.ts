export default interface IPush{
    id:string;
    exercise:string;
    description:string;
    gif:string;
}
export class pushDTO implements IPush{
    id="";
    exercise="";
    description="";
    gif="";
  }
export default class Pushs extends pushDTO {
    constructor(dto: pushDTO){
      super();
      Object.assign(this, dto);
    }
}