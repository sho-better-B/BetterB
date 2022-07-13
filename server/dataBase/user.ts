import { Document, Schema, model, connect } from "mongoose";

// 1. Create a new model interface
interface IUser extends Document {
  name: string;
  img: string;
  email: string;
  weight: number;
  height: number;
  imc: number;
}
// 2. Create schema unsing typescript
const UserSchema = new Schema<IUser>({
  name: String,
  img: String,
  email: String,
  weight: Number,
  height: Number,
  imc: Number,
});

// 3. exports the schema object

export const UserModel = model<IUser>("users", UserSchema);
