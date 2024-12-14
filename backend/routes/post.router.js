import express from "express";
import postController from "../controllers/post.controller.js";
import {
  authorizeRoles,
  isAuthenticated,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  authorizeRoles("admin"),
  postController.createPost
);

router.get("/getFilter", postController.getPost);

router.post("/reviews", isAuthenticated, postController.reviewPost);

router.post(
  "/review/answer",
  isAuthenticated,
  authorizeRoles("admin"),
  postController.reviewAnswer
);

export default router;
