import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    subscribers: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Channel", channelSchema);