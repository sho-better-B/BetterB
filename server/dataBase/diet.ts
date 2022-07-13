import { Document, Schema,  model } from 'mongoose';

interface IReceipe extends Document {
  nameReceipe: string;

}

const ReceipeSchema = new Schema<IReceipe>({
    nameReceipe: {
      type: String,
      required: true
    }
  });
  export const ReceipeModel = model<IReceipe>("receipes", ReceipeSchema);
  export {IReceipe}