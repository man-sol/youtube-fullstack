import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  const channel = new Channel({ ...req.body, owner: req.user.id });
  await channel.save();
  res.json(channel);
};

export const getChannel = async (req, res) => {
  const channel = await Channel.findById(req.params.id).populate("videos");
  res.json(channel);
};