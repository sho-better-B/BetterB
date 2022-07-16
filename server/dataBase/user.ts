import { Document, Schema, model } from "mongoose";

// 1. Create a new model interface
interface IUser extends Document {
  name: string;
  img: string;
  email: string;
  password: string;
  weight: number;
  height: number;
  imc: number;
}
// 2. Create schema unsing typescript
const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  weight: Number,
  height: Number,
  imc: Number,
});

// 3. exports the schema object

export const UserModel = model<IUser>("users", UserSchema);
