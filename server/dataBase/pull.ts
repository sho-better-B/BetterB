import { Document, Schema, model } from "mongoose";

interface IPull extends Document {
  exercise: string;
  description: string;
  gif: string;
}

const PullSchema = new Schema<IPull>({
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
export const PullModel = model<IPull>("pulls", PullSchema);
