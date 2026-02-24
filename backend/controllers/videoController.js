import Video from "../models/Video.js";

export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addVideo = async (req, res) => {
  try {
    const video = new Video({
      ...req.body,
      uploader: req.user.id,
    });

    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};