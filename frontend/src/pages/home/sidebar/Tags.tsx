import { Button } from "@/components/ui/button";
import SidebarTitle from "@/components/ui/title/SidebarTitle";
import { usePostStore } from "@/store/PostStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tags = () => {
  const { postTags, getTags } = usePostStore();
  const navigate = useNavigate();

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="w-full">
      <SidebarTitle title="Tags" className="py-2" />
      <div className="gap-4 grid grid-cols-2 mt-4">
        {postTags?.map((item: any, index: number) => (
          <Button
            onClick={() => navigate(`/tags/${item.name}`)}
            key={index}
            size={"sm"}
            variant={"outline"}
          >
            {item.name} ({item._count})
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
