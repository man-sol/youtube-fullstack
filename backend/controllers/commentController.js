import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const comment = new Comment({ ...req.body, user: req.user.id });
  await comment.save();
  res.json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.find({ video: req.params.videoId }).populate("user");
  res.json(comments);
};