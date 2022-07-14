export default interface ILegs{
    id:string;
    exercise:string;
    description:string;
    gif:string;
}
export class legsDTO implements ILegs{
    id="";
    exercise="";
    description="";
    gif="";
  }
export default class Legss extends legsDTO {
    constructor(dto: legsDTO){
      super();
      Object.assign(this, dto);
    }
}