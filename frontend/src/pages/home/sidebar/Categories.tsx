import SidebarTitle from "@/components/ui/title/SidebarTitle";
import { usePostStore } from "@/store/PostStore";

const Categories = () => {
  const { posts } = usePostStore();

  const allTags = posts?.posts?.flatMap((post) => post.category);
  const tagsCountMap = new Map();
  allTags?.forEach((cat) => {
    tagsCountMap.set(cat, (tagsCountMap.get(cat) || 0) + 1);
  });
  const tagsArray = [...tagsCountMap.entries()];
  const catObject = Object.values(tagsArray).map(([cat, count]) => ({
    key: cat,
    count: count,
  }));

  return (
    <div className="w-full">
      <SidebarTitle title="Categories" className="py-2" />
      <div className="gap-4 flex flex-col mt-4">
        {catObject.map((item, index) => (
          <span
            key={index}
            className="flex items-center justify-between w-full"
          >
            {item.key}
            <span>
              ({item.count}/{allTags.length})
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
