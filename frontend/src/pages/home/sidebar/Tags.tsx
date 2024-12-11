import { Button } from "@/components/ui/button";
import SidebarTitle from "@/components/ui/title/SidebarTitle";

const CategoryTags = [
  {
    id: 1,
    title: "Health",
  },
  {
    id: 2,
    title: "Technology",
  },
  {
    id: 3,
    title: "Education",
  },
  {
    id: 4,
    title: "Business",
  },
  {
    id: 5,
    title: "Travel",
  },
  {
    id: 6,
    title: "Lifestyle",
  },
  {
    id: 7,
    title: "Sports",
  },
  {
    id: 8,
    title: "Entertainment",
  },
  {
    id: 9,
    title: "Food",
  },
  {
    id: 10,
    title: "Science",
  },
  {
    id: 11,
    title: "Art",
  },
  {
    id: 12,
    title: "Environment",
  },
];

const Tags = () => {
  return (
    <div className="w-full">
      <SidebarTitle title="Tags" className="py-2" />
      <div className="gap-4 grid grid-cols-3 mt-4">
        {CategoryTags.map((item) => (
          <Button key={item.id} size={"sm"} variant={"outline"}>
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
