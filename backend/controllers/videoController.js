import Video from "../models/Video.js";

export const getAllVideos = async (req, res) => {
  const videos = await Video.find().populate("user", "username");
  res.json(videos);
};

export const getVideoById = async (req, res) => {
  const video = await Video.findById(req.params.id).populate("user", "username");

  if (!video) return res.status(404).json({ message: "Video not found" });

  video.views += 1;
  await video.save();

  res.json(video);
};

export const createVideo = async (req, res) => {
  const { title, description, videoUrl, thumbnail } = req.body;

  const video = await Video.create({
    title,
    description,
    videoUrl,
    thumbnail,
    user: req.user
  });

  res.status(201).json(video);
};