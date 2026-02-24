import Video from "../models/Video.js";

// GET all videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE video
export const createVideo = async (req, res) => {
  try {
    const { title, thumbnail, channelName, views } = req.body;

    const video = new Video({
      title,
      thumbnail,
      channelName,
      views,
    });

    const createdVideo = await video.save();
    res.status(201).json(createdVideo);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};