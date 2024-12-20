import { Separator } from "@/components/ui/separator";
import Markdown from "@/components/markdown/Markdown";
import { getDateLocal } from "@/helper/date-format";
import Reviews from "./Reviews";
import ReviewCreate from "./ReviewCreate";
import { usePostStore } from "@/store/PostStore";
import { useEffect } from "react";
import { useUserStore } from "@/store/AuthStore";

const DetailItem = ({ post }: any) => {
  const { reviewsGet, reviews } = usePostStore();
  const { user } = useUserStore();
  useEffect(() => {
    if (post?.id) {
      reviewsGet({ id: post.id });
    }
  }, [post?.id, reviewsGet]);

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
      <div className="mt-24 overflow-y-auto h-[700px]">
        <h1 className="text-2xl font-bold font-body">Comments</h1>
        <Separator className="my-6" />
        {user && (
          <div>
            <ReviewCreate />
          </div>
        )}
        <div className="flex flex-col gap-4  overflow-y-auto">
          {reviews.length > 0 ? (
            reviews?.map((item: any) => (
              <Reviews
                reply={item?.reply}
                key={item?.id}
                item={item}
                postId={post.id}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">No reviews yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
