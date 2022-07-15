export default interface IUser {
  _id: string;
  name: string;
  img: string;
  email: string;
  weight: number;
  height: number;
  imc: number;
  description: string;
}
export class userDTO implements IUser {
  _id = "";
  name = "";
  img = "";
  email = "";
  weight = 0;
  height = 0;
  imc = 0;
  description = "";
}
export default class Users extends userDTO {
  constructor(dto: userDTO) {
    super();
    Object.assign(this, dto);
  }
}
