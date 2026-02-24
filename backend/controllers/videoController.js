import Video from "../models/Video.js";

export const getAllVideos = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};

export const addVideo = async (req, res) => {
  const video = new Video({ ...req.body, uploader: req.user.id });
  await video.save();
  res.json(video);
};