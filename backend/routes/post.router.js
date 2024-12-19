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

router.get("/getById/:title/:id", postController.getByPostId);

router.put("/reviews", isAuthenticated, postController.reviewPost);

router.get("/getAll", postController.getPostAll);

router.get("/getTags", postController.getTags);

router.get("/getTagsDetails/:name", postController.getTagsDetails);

router.get("/reviewsGet/:id", postController.reviewsGet);

router.post(
  "/review/answer",
  isAuthenticated,
  authorizeRoles("admin"),
  postController.reviewAnswer
);

export default router;
