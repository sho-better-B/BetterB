import axios from "axios";
import IDiet from "../interface/dietInterface"
export class recipesApi {

  static async getAllrecipes() {
    const url = "http://localhost:2000/api/diet";
    const response = await axios.get(url);
    return response.data;
  }
 static async addrecipes(name:string,image:string,description:string){
  const url = "http://localhost:2000/api/diet/add";
const resp =axios.post<IDiet>(url,{nameReceipe:name,
  image:image,description:description})
  return resp
 }
 static async deleterecepies(id:string){
  const url = "http://localhost:2000/api/diet/delete";
  const resp = axios.delete(url,{data:{_id:id}});
  return resp
 }
}
