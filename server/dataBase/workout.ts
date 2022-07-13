import { Document, Schema, model } from "mongoose";

interface IWorkout extends Document {
  exercise: string;
  description: string;
  gif: string;
}

const WorkoutSchema = new Schema<IWorkout>({
<<<<<<< HEAD
  exercise: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gif: {
    type: String,
    required: true,
  },
});
export const WorkoutModel = model<IWorkout>("workout", WorkoutSchema);
=======
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
  export const WorkoutModel = model<IWorkout>("workouts", WorkoutSchema);
>>>>>>> 7196b7b6ed2b532d9bc1dde7259bda2dadba1782
