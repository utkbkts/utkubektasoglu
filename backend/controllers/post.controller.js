import prisma from "../libs/db.js";
import { upload_file } from "../utils/cloudinary.js";
import { generateSlug } from "../utils/slugId.js";

const createPost = async (req, res) => {
  const { title, description, image, category, categoryHeader, tags } =
    req.body;

  if (
    !title ||
    !description ||
    !image ||
    !category ||
    !categoryHeader ||
    !tags
  ) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  let imagesData = [];

  if (image) {
    const picsArray = Array.isArray(image) ? image : [image];
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

  let tagsArray = [];
  if (tags) {
    tagsArray = tags.split(",").map((tag) => tag.trim());
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        category,
        tags: {
          create: tagsArray.map((tag) => ({ name: tag })),
        },
        image: {
          create: imagesData,
        },
        categoryHeader,
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

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, category, categoryHeader, tags } =
      req.body;

    const existingPost = await prisma.post.findUnique({
      where: { id: id },
    });

    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    let imagesData = [];
    if (image) {
      const picsArray = Array.isArray(image) ? image : [image];
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
          .json({ error: "Error with image upload", error: error.message });
      }
    }

    let tagsArray = [];
    if (tags) {
      tagsArray = tags.split(",").map((tag) => tag.trim());
    }

    const existingTags = await prisma.tag.findMany({
      where: { name: { in: tagsArray } },
    });
    const newTags = tagsArray.filter(
      (tag) => !existingTags.some((t) => t.name === tag)
    );

    const updatedPost = await prisma.$transaction(async (prisma) => {
      const postUpdate = prisma.post.update({
        where: { id: id },
        data: {
          title,
          description,
          category,
          tags: {
            create: newTags.map((tag) => ({ name: tag })),
            connect: existingTags.map((tag) => ({ id: tag.id })),
          },
          image: {
            create: imagesData,
          },
          categoryHeader,
          authorId: req.user.id,
        },
      });
      return postUpdate;
    });

    return res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

const getPost = async (req, res) => {
  const resPerPage = 6;
  const { page = 1, search = "" } = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        categoryHeader: "project",
        ...(search.trim() && {
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              categoryHeader: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              category: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }),
      },
      skip: (page - 1) * resPerPage,
      take: resPerPage,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        image: true,
      },
    });

    const totalPosts = await prisma.post.count({
      where: {
        categoryHeader: "project",
        ...(search.trim() && {
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              categoryHeader: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              category: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }),
      },
    });

    const totalPages = Math.ceil(totalPosts / resPerPage);

    res.status(200).json({
      success: true,
      posts,
      currentPage: Number(page),
      totalPages,
      totalPosts,
      resPerPage,
    });
  } catch (error) {
    console.error("Error in getPost:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred on the server.",
      error: error.message,
    });
  }
};

const getPostAll = async (req, res) => {
  try {
    const post = await prisma.post.findMany({
      include: {
        author: true,
        image: true,
        reviews: true,
      },
    });
    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

const getByPostId = async (req, res) => {
  try {
    const { title, id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        author: true,
        image: true,
        reviews: true,
      },
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    if (post && generateSlug(post.title) !== title) {
      return res.status(400).json({
        success: false,
        message: "Title does not match the post ID.",
      });
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred on the server.",
    });
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
      id: productId,
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

const reviewsGet = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await prisma.review.findMany({
      where: {
        postId: id,
      },
      include: {
        post: true,
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({ data: reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const reviewDelete = async (req, res) => {
  const { productId, reviewId } = req.query;
  try {
    const product = await prisma.post.findUnique({
      where: { id: productId },
      include: { reviews: true },
    });

    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    const reviews = product.reviews.filter(
      (review) => review.id.toString() !== reviewId.toString()
    );

    const reviewsAuthor = product.reviews.map((item) => item.authorId);

    if (!reviewsAuthor.includes(req.user.id) && req.user.role !== "admin") {
      return res
        .status(403)
        .json({ error: "You are not allowed to delete this review" });
    }

    const numOfReviews = reviews.length;

    const ratings =
      numOfReviews === 0
        ? 0
        : reviews.reduce((acc, item) => acc + item.rating, 0) / numOfReviews;

    const updatedProduct = await prisma.post.update({
      where: { id: productId },
      data: {
        numOfReviews,
        ratings,
      },
      include: { reviews: true },
    });

    await prisma.review.delete({
      where: { id: reviewId },
    });

    return res.status(200).json({ post: updatedProduct });
  } catch (error) {
    console.error("Error in reviewDelete:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTags = async (req, res) => {
  try {
    const tagCounts = await prisma.tag.groupBy({
      by: ["name"],
      _count: true,
    });
    res.status(200).json({ success: true, data: tagCounts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

const getTagsDetails = async (req, res) => {
  const { name } = req.params;

  try {
    // Use findFirst instead of findUnique since name might not be unique
    const tag = await prisma.tag.findMany({
      where: {
        name,
      },
      include: {
        Post: {
          select: {
            image: true,
            title: true,
            categoryHeader: true,
            author: true,
            description: true,
            createdAt: true,
            category: true,
            id: true,
          },
        },
      },
    });

    if (!tag) {
      return res.status(404).json({ success: false, message: "Tag not found" });
    }

    res.status(200).json({ success: true, data: tag });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export default {
  createPost,
  reviewPost,
  reviewAnswer,
  getPost,
  getByPostId,
  getPostAll,
  getTags,
  getTagsDetails,
  reviewsGet,
  reviewDelete,
  updatePost,
};
