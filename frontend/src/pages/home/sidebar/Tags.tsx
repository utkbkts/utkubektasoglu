import { Button } from "@/components/ui/button";
import SidebarTitle from "@/components/ui/title/SidebarTitle";
import { usePostStore } from "@/store/PostStore";

const Tags = () => {
  const { posts } = usePostStore();

  const allTags = posts?.posts?.flatMap((post: any) => post.tags);

  const tagsCountMap = new Map();

  allTags?.forEach((tag) => {
    tagsCountMap.set(tag, (tagsCountMap.get(tag) || 0) + 1);
  });

  const tagsArray = [...tagsCountMap.entries()];

  const tagsObject = Object.values(tagsArray).map(([tag, count]) => ({
    key: tag,
    count: count,
  }));
  return (
    <div className="w-full">
      <SidebarTitle title="Tags" className="py-2" />
      <div className="gap-4 grid grid-cols-2 mt-4">
        {tagsObject.map((item, index) => (
          <Button key={index} size={"sm"} variant={"outline"}>
            {item.key} ({item.count})
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
