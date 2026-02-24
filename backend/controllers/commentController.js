import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const { text } = req.body;

  const comment = await Comment.create({
    text,
    video: req.params.videoId,
    user: req.user
  });

  res.status(201).json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.find({
    video: req.params.videoId
  }).populate("user", "username");

  res.json(comments);
};