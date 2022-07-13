export default interface IDiet{
    id:string;
    nameReceipe:string;
    
}
export class recipeDTO implements IDiet{
    id= "";
    nameReceipe="";
  
  }
export default class Diets extends recipeDTO {
    constructor(dto: recipeDTO){
      super();
      Object.assign(this, dto);
    }
}