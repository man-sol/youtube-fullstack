import express from "express";
import {
  getAllVideos,
  getVideoById,
  createVideo
} from "../controllers/videoController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllVideos);
router.get("/:id", getVideoById);
router.post("/", protect, createVideo);

export default router;