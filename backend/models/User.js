import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }],
});

export default mongoose.model("User", UserSchema);