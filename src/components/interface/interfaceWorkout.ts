export default interface IWork{
    id:string;
    exercise:string;
    description:string;
    gif:string;
}
export class workDTO implements IWork{
    id="";
    exercise="";
    description="";
    gif="";
  }
export default class Works extends workDTO {
    constructor(dto: workDTO){
      super();
      Object.assign(this, dto);
    }
}