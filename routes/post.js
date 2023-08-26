import express from "express";
import { getFeedPost,getUserPost,likePost } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/",verifyToken,getFeedPost);
router.get("/:userId/posts",verifyToken,getUserPost);

// UPDATE
router.patch("/:id/like",verifyToken,likePost);

export default router;