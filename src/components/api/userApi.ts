import axios from "axios";
import IUser from "../interface/userInterface";

export abstract class userApi {
  private static userAxios = axios.create();

  static async getAllusers(): Promise<IUser[]> {
    const url = "http://localhost:2000/api/user";
    const response = await this.userAxios.get(url);
    console.log(response.data);
    return response.data;
  }
  static async adduser(
    name: string,
    img: string,
    email: string,
    weight: number,
    height: number,
    IMC: number
  ) {
    const url = "http://localhost:2000/api/user/add";
    const resp = axios.post<IUser>(url, {
      name: name,
      img: img,
      email: email,
      weight: weight,
      height: height,
      imc: IMC,
    });
    return resp;
  }
}
