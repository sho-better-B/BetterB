export default interface IUser {
  id: string;
  name: string;
  img: string;
  email: string;
  weight: number;
  height: number;
  imc: number;
}
export class userDTO implements IUser {
  id = "";
  name = "";
  img = "";
  email = "";
  weight = 0;
  height = 0;
  imc = 0;
}
export default class Users extends userDTO {
  constructor(dto: userDTO) {
    super();
    Object.assign(this, dto);
  }
}
