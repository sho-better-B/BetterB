import axios from "axios";
import IPull from "../interface/interfacePull";

export abstract class pullsApi {
  private static pullAxios = axios.create();

  static async getAllpulls(): Promise<IPull[]> {
    const url = "http://localhost:2000/pull";
    const response = await this.pullAxios.get(url);
    console.log(response.data);

    return response.data;
  }
}
