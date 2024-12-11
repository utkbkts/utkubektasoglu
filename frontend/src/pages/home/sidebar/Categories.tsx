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

const Categories = () => {
  return (
    <div className="w-full">
      <SidebarTitle title="Categories" className="py-2" />
      <div className="gap-4 flex flex-col mt-4">
        {CategoryTags.map((item, index) => (
          <span
            key={item.id}
            className="flex items-center justify-between w-full"
          >
            {" "}
            {item.title}
            <span>
              {" "}
              ({index + 1}/{CategoryTags.length})
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
