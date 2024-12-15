import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSlug, getDateLocal } from "@/helper/date-format";
import { Link } from "react-router-dom";

const RecentBlogsCard = ({ post }: any) => {
  const slug = generateSlug(post.title);
  return (
    <Link to={`/detail/${slug}/${post.id}`} className="flex ">
      <div className="relative w-full">
        <img
          src={post?.image[0]?.url}
          alt="Main"
          className="w-[280px] h-[210px] object-cover rounded-lg "
          title={post.title}
        />
        <div className="bg-gradient-to-t from-black/60 to-black/20 absolute top-0 bottom-0 left-0 w-full h-[210px] z-10 rounded-lg"></div>
      </div>
      <div className="  text-black p-4 rounded-lg  ">
        <Button size={"sm"} variant={"destructive"}>
          {post?.category}
        </Button>
        <h3 className=" text-[22px] font-semibold">
          {post?.title.slice(0, 50)}
        </h3>
        <p className="text-[13px] font-semibold text-gray-400">
          {post?.description?.slice(0, 150)}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-black flex items-center gap-1 text-[14px]">
            <Calendar size={15} />
            {getDateLocal(post?.createdAt)}
          </p>
          <span className="flex items-center gap-1 text-[14px]">
            <User size={15} />
            By {post?.author?.name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecentBlogsCard;
