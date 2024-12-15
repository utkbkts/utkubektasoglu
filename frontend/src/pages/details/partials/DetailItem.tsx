import { Separator } from "@/components/ui/separator";
import Markdown from "@/components/markdown/Markdown";
import { getDateLocal } from "@/helper/date-format";

interface Props {
  post: {
    id: number;
    title: string;
    image: [{ url: string }];
    category: string[];
    createdAt: string;
    author: {
      id: number;
      name: string;
    };
    description: string;
  };
}

const DetailItem = ({ post }: Props) => {
  console.log("🚀 ~ DetailItem ~ post:", post);
  return (
    <div className="p-6 font-sans">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
        <div className="text-gray-600 text-sm">
          <span>By {post?.author?.name}</span>
          <span className="mx-2">|</span>
          <span>{getDateLocal(post?.createdAt)}</span>
        </div>
        <Separator className="my-6" />
      </header>

      {/* Image Section */}
      <div className="text-center mb-6">
        {post?.image?.length > 0 && (
          <img
            src={post?.image[0]?.url}
            alt="Augmented Reality"
            className="max-w-full h-auto rounded-lg"
          />
        )}
      </div>

      {/* Content Section */}
      <section className="prose prose-lg max-w-none text-gray-800">
        <Markdown>{post?.description}</Markdown>
      </section>
    </div>
  );
};

export default DetailItem;
