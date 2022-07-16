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
  static async addlegss(exercise:string,description:string,gif:string){
    const url = "http://localhost:2000/legs";
  const resp =axios.post<ILegs>(url,{exercise:exercise,description:description,gif:gif})
    return resp
   }
   static async deletelegss(id:string){
    const url = "http://localhost:2000/legs";
    const resp = axios.delete(url,{data:{_id:id}});
    return resp
   }
}
