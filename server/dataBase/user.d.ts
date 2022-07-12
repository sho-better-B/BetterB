import { Schema, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

interface user {
  name: string;
  img: string;
  email: string;
  weight: number;
  height: number;
  imc: number;
}
// 2. Create schema unsing typescript
const userSchema = new Schema<user>({
  name: String,
  img: String,
  email: String,
  weight: Number,
  height: Number,
  imc: Number,
});

// 3. create user model

const userProfile = model<user>("users", userSchema);

module.exports = userProfile;
