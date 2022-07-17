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
    IMC: number,
    description: string,
    password: string
  ) {
    const url = "http://localhost:2000/api/user/add";
    const resp = axios.post<IUser>(url, {
      name: name,
      img: img,
      email: email,
      weight: weight,
      height: height,
      imc: IMC,
      description: description,
      password: password
    });
    return resp;
  }
  static async deleteuser(id: string) {
    const url = "http://localhost:2000/api/user/delete";
    const resp = axios.delete(url, { data: { _id: id } });
    return resp;
  }
}
