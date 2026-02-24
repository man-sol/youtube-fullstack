import express from "express";
import { getAllVideos, addVideo } from "../controllers/videoController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllVideos);
router.post("/", verifyToken, addVideo);

export default router;