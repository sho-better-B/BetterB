export default interface ICore{
    id:string;
    exercise:string;
    description:string;
    gif:string;
}
export class coreDTO implements ICore{
    id="";
    exercise="";
    description="";
    gif="";
  }
export default class Cores extends coreDTO {
    constructor(dto: coreDTO){
      super();
      Object.assign(this, dto);
    }
}