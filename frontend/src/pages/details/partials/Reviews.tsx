import { getDateLocal } from "@/helper/date-format";
import { useUserStore } from "@/store/AuthStore";
import { usePostStore } from "@/store/PostStore";
import { Trash } from "lucide-react";

interface Props {
  reply?: string;
  item: any;
  postId: any;
}

const Reviews = ({ reply, item, postId }: Props) => {
  const { reviewsDelete } = usePostStore();
  const { user } = useUserStore();
  const handleDelete = async (id: any) => {
    await reviewsDelete({ reviewId: id, productId: postId });
  };

  const reviewMe = user?.id === item?.author?.id;

  return (
    <div className=" bg-white  rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex p-4">
        <div className="flex-shrink-0">
          <img
            src="/avatar.png"
            alt="User avatar"
            className="h-16 w-16 rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item?.author?.name}
              </h3>
              <p className="text-muted-foreground">
                {getDateLocal(item?.createdAt)}
              </p>
            </div>
            {reviewMe && (
              <div onClick={() => handleDelete(item?.id)}>
                <Trash className="w-6 h-6 text-gray-500 cursor-pointer" />
              </div>
            )}
          </div>
          <div className="flex items-center text-yellow-500 mb-2 ">
            {"★".repeat(item?.rating) + "☆".repeat(5 - item?.rating)}
          </div>
          <div>
            <p className="mt-2 text-gray-600 w-[400px]">{item?.comment}</p>
            {reply && (
              <div className="mt-4 w-full bg-gray-100 p-3 rounded-md border-l-4 border-blue-500">
                <h4 className="text-sm font-semibold text-blue-600">
                  Admin Response
                </h4>
                <p className="text-gray-700 w-full">{reply}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
