import { Document, Schema, model } from "mongoose";

interface IPush extends Document {
  exercise: string;
  description: string;
  gif: string;
}

const PushSchema = new Schema<IPush>({
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
export const PushModel = model<IPush>("pushs", PushSchema);
