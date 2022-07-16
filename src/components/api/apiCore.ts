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
  static async addcores(exercise:string,description:string,gif:string){
    const url = "http://localhost:2000/core";
  const resp =axios.post<ICore>(url,{exercise:exercise,description:description,gif:gif})
    return resp
   }
   static async deletecores(id:string){
    const url = "http://localhost:2000/core";
    const resp = axios.delete(url,{data:{_id:id}});
    return resp
   }
}
