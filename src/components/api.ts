import axios from "axios";
import IDiet from "./interface";

export abstract class recipesApi {
    private static recipeAxios = axios.create();
  
    static async getAllrecipes(): Promise<IDiet[]>{
      const url = 'http://localhost:2000/api/diet'
      const response = await this.recipeAxios.get(url);
      return response.data
    }
  }
