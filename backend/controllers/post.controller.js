import prisma from "../libs/db.js";
import { upload_file } from "../utils/cloudinary.js";

const createPost = async (req, res) => {
  const { title, content, profilePic, category } = req.body;

  if (!title || !content || !profilePic || !category) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  let imagesData = [];

  if (profilePic) {
    const picsArray = Array.isArray(profilePic) ? profilePic : [profilePic];
    try {
      const uploadPromises = picsArray.map((img) =>
        upload_file(img, "website")
      );
      const urls = await Promise.all(uploadPromises);
      imagesData = urls.map((urlData) => ({
        public_id: urlData.public_id,
        url: urlData.url,
      }));
    } catch (error) {
      return res
        .status(400)
        .json({ error: "error image not succes", error: error.message });
    }
  }

  let skillsArray = [];

  if (category) {
    skillsArray = category.split(",").map((skill) => skill.trim());
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        category: skillsArray,
        profilePic: {
          create: imagesData,
        },
        authorId: req.user.id,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

const reviewPost = async (req, res) => {
  const { rating, comment, productId } = req.body;

  const reviewData = {
    user: req.user.id,
    rating: Number(rating),
    comment,
  };
  try {
    const product = await prisma.post.findUnique({
      where: { id: productId },
      include: {
        reviews: true,
      },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const existingReview = product.reviews.find(
      (r) => r.authorId === req.user.id
    );

    if (existingReview) {
      await prisma.review.update({
        where: { id: existingReview.id },
        data: {
          rating: reviewData.rating,
          comment: reviewData.comment,
        },
      });
    } else {
      await prisma.review.create({
        data: {
          authorId: reviewData.user,
          rating: reviewData.rating,
          comment: reviewData.comment,
          postId: productId,
        },
      });
      await prisma.post.update({
        where: { id: productId },
        data: {
          numOfReviews: product.numOfReviews + 1,
        },
      });
    }
    const updatedProduct = await prisma.post.findUnique({
      where: { id: productId },
      include: { reviews: true },
    });

    const newRating =
      updatedProduct.reviews.reduce((acc, item) => item.rating + acc, 0) /
      updatedProduct.reviews.length;

    await prisma.post.update({
      where: { id: productId },
      data: { ratings: newRating },
    });

    return res.status(200).json({
      success: true,
      message: "Review submitted successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
const reviewAnswer = async (req, res) => {
  const { reply, reviewId } = req.body;

  try {
    const review = await prisma.review.findUnique({
      where: { id: reviewId },
    });

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ error: "Only admins can respond to reviews" });
    }

    await prisma.review.update({
      where: { id: reviewId },
      data: { reply },
    });

    return res.status(200).json({ message: "Reply added successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.message, message: "Internal server error" });
  }
};

export default { createPost, reviewPost, reviewAnswer };
