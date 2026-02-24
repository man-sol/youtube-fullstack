import express from "express";
import { getVideos, createVideo } from "../controllers/videoController.js";

const router = express.Router();

// GET all videos
router.get("/", getVideos);

// POST new video
router.post("/", createVideo);

export default router;