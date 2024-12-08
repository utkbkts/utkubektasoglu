import prisma from "../libs/db.js";
import { upload_file } from "../utils/cloudinary.js";

const createPost = async (req, res) => {
  const { title, content, profilePic } = req.body;

  if (!title || !content || !profilePic) {
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
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        profilePic: {
          create: imagesData, // Burada doğru şekilde create ilişkisi kullanılıyor
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

export default { createPost };
