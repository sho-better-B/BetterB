import { Document, Schema,  model } from 'mongoose';

interface IWorkout extends Document {
  exercise: string;
  description:string;
  gif:string;

}

const WorkoutSchema = new Schema<IWorkout>({
    exercise: {
      type: String,
      required: true
    },
    description:{
        type:String ,
        required:true
    },
    gif:{
        type:String,
        required:true,
    }
  });
  export const WorkoutModel = model<IWorkout>("workout", WorkoutSchema);