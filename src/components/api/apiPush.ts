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
  static async addpushs(exercise:string,description:string,gif:string){
    const url = "http://localhost:2000/push";
  const resp =axios.post<IPush>(url,{exercise:exercise,description:description,gif:gif})
    return resp
   }
   static async deletepushs(id:string){
    const url = "http://localhost:2000/push";
    const resp = axios.delete(url,{data:{_id:id}});
    return resp
   }
}
