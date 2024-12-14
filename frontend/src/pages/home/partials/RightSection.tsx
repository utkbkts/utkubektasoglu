import { Button } from "@/components/ui/button";
import { getDateLocal } from "@/helper/date-format";

interface Props {
  posts: {
    id: any;
    title: string;
    image: [{ url: string }];
    category: string[];
    createdAt: string;
    author: {
      id: any;
      name: string;
    };
    categoryHeader: string;
  };
}

const RightSection = ({ posts }: Props) => {
  return (
    <div className="">
      {posts.image.map((item: any) => (
        <div key={item.id} className="flex items-center gap-4">
          <img
            src={item.url}
            alt={item.url}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <Button size={"sm"} variant={"outline"}>
              {posts.category.join(",")}
            </Button>
            <h3 className="text-md font-semibold mt-2">{posts.title}</h3>
            <p className="text-sm text-gray-500">
              {" "}
              {getDateLocal(posts?.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
