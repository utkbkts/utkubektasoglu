import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSlug, getDateLocal } from "@/helper/date-format";
import { Link } from "react-router-dom";
const PopularProjects = ({ post }: any) => {
  const slug = generateSlug(post.title);
  return (
    <Link
      to={`/detail/${slug}/${post.id}`}
      className="mt-4 cursor-pointer hover:shadow-lg overflow-hidden "
    >
      <div className="col-span-2 relative">
        <img
          src={post.image[0].url}
          alt="Main"
          className="w-full h-[400px] object-cover rounded-lg "
        />
        <div className="bg-gradient-to-t from-black/60 to-black/20 absolute bottom-0 left-0 w-full h-full z-10"></div>
        <div className="absolute bottom-4 left-2 text-white p-2 rounded-lg  z-10">
          <Button size={"sm"} variant={"destructive"}>
            {post.category}
          </Button>
          <h3 className="mt-2 text-[15px] font-semibold">{post.title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-white flex items-center gap-1 text-[14px] whitespace-nowrap">
              <Calendar size={15} />
              {getDateLocal(post.createdAt)}
            </p>
            <span className="flex items-center gap-1 text-[14px] whitespace-nowrap">
              <User size={15} />
              By {post.author.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularProjects;
