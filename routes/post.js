import express from "express";
import {
  createPost,
  deletePost,
  getDetail,
  getPosts,
  getUpdate,
  searchPost,
} from "../controllers/post.js";
import authMiddleware from "../middleware/auth.js";
const postRouter = express.Router();

postRouter.get("/getPosts", getPosts);
postRouter.post("/createPost", authMiddleware, createPost);
postRouter.get("/getDetail/:id", getDetail);
postRouter.patch("/getUpdate/:id", authMiddleware, getUpdate);
postRouter.delete("/deletePost/:id", authMiddleware, deletePost);
postRouter.get("/searchPost", searchPost);

export default postRouter;
