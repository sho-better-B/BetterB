export default interface IPull{
    id:string;
    exercise:string;
    description:string;
    gif:string;
}
export class pullDTO implements IPull{
    id="";
    exercise="";
    description="";
    gif="";
  }
export default class Pulls extends pullDTO {
    constructor(dto: pullDTO){
      super();
      Object.assign(this, dto);
    }
}