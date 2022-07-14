import { Document, Schema, model } from "mongoose";

interface ILegs extends Document {
  exercise: string;
  description: string;
  gif: string;
}

const LegsSchema = new Schema<ILegs>({
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
export const LegsModel = model<ILegs>("legss", LegsSchema);
