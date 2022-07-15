import { Document, Schema,  model } from 'mongoose';

interface IReceipe extends Document {
  nameReceipe: string;
  image: string;
  description: string;


}

const ReceipeSchema = new Schema<IReceipe>({
    nameReceipe: {
      type: String,
      required: true
    },
    image :String,
    description:String,
    

  });
  export const ReceipeModel = model<IReceipe>("receipes", ReceipeSchema);
  export {IReceipe}