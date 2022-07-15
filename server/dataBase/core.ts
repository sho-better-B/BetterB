import { Document, Schema, model } from "mongoose";

interface ICore extends Document {
  exercise: string;
  description: string;
  gif: string;
}

const CoreSchema = new Schema<ICore>({
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
export const CoreModel = model<ICore>("cores", CoreSchema);
export{ICore}
