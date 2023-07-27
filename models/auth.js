import mongoose, { mongo } from "mongoose";
const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
const Auth = mongoose.model("auth", AuthSchema);
export { Auth };
