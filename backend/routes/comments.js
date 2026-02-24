import express from "express";
import { addComment, getComments } from "../controllers/commentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.get("/:videoId", getComments);

export default router;