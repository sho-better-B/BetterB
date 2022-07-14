import axios from "axios";
import IPush from "../interface/interfacePush";

export abstract class pushsApi {
  private static pushAxios = axios.create();

  static async getAllpushs(): Promise<IPush[]> {
    const url = "http://localhost:2000/push";
    const response = await this.pushAxios.get(url);
    console.log(response.data);

    return response.data;
  }
}
