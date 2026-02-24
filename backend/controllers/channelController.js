import Channel from "../models/Channel.js";

export const createChannel = async (req, res) => {
  const channel = await Channel.create({
    ...req.body,
    owner: req.user.id,
  });
  res.status(201).json(channel);
};

export const getChannel = async (req, res) => {
  const channel = await Channel.findById(req.params.id);
  res.json(channel);
};