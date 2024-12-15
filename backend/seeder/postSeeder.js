import { postProduct } from "../data/postDb.js";
import prisma from "../libs/db.js";

async function seedData() {
  //   await prisma.post.deleteMany({});
  //   console.log("All existing posts have been deleted!");

  const createProductPromises = postProduct.map((product) =>
    prisma.post.create({
      data: {
        categoryHeader: product.categoryHeader,
        title: product.title,
        description: product.description,
        category: product.category,
        authorId: product.authorId,
        image: {
          create:
            product.image?.map((img) => ({
              public_id: img.public_id,
              url: img.url,
            })) || [],
        },
        tags: {
          set: product.tags,
        },
      },
    })
  );

  await Promise.all(createProductPromises);

  console.log("Seed data has been added!");
}

seedData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
