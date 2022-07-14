import axios from "axios";
import ILegs from "../interface/interfaceLegs";

export abstract class legssApi {
  private static legsAxios = axios.create();

  static async getAlllegss(): Promise<ILegs[]> {
    const url = "http://localhost:2000/legs";
    const response = await this.legsAxios.get(url);
    console.log(response.data);

    return response.data;
  }
}
