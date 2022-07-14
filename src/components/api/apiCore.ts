import axios from "axios";
import ICore from "../interface/interfaceCore";

export abstract class coresApi {
  private static coreAxios = axios.create();

  static async getAllcores(): Promise<ICore[]> {
    const url = "http://localhost:2000/core";
    const response = await this.coreAxios.get(url);
    console.log(response.data);

    return response.data;
  }
}
