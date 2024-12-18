import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDateLocal } from "@/helper/date-format";

interface Props {
  post: {
    id: any;
    title: string;
    image: [{ url: string }];
    category: any;
    createdAt: string;
    author: {
      id: any;
      name: string;
    };
    categoryHeader: string;
  } | null;
}

const LeftSection = ({ post }: Props) => {
  return (
    <div className="col-span-2 relative ">
      <img
        src={post?.image[0]?.url}
        alt="Main"
        className="w-full h-[500px] object-cover "
      />
      <div className="bg-gradient-to-t from-black/60 to-black/20 absolute bottom-0 left-0 w-full h-40 z-10"></div>
      <div className="absolute bottom-4 left-4 text-white p-4 rounded-lg  z-10">
        <Button size={"md"} variant={"destructive"}>
          {post?.category[0]?.name}
        </Button>
        <h3 className="mt-2 text-lg font-semibold">{post?.title}</h3>
        <div className="flex items-center gap-2">
          <p className="text-white flex items-center gap-1">
            <Calendar size={15} />
            {getDateLocal(post?.createdAt)}
          </p>
          <span className="flex items-center gap-1">
            <User size={15} />
            By {post?.author?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
