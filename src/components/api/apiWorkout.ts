import axios from "axios";
import IWork from "../interface/interfaceWorkout";

export abstract class workoutsApi {
  private static workoutAxios = axios.create();

  static async getAllworkouts(): Promise<IWork[]> {
    const url = "http://localhost:2000/workout";
    const response = await this.workoutAxios.get(url);
    console.log(response.data);

    return response.data;
  }
}
