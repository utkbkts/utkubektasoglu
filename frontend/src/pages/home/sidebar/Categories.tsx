import SidebarTitle from "@/components/ui/title/SidebarTitle";
import { usePostStore } from "@/store/PostStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  _count: number;
}

const Categories = () => {
  const { getCategories, postCategories } = usePostStore();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full">
      <SidebarTitle title="Categories" className="py-2" />
      <div className="gap-4 flex flex-col mt-4">
        {postCategories.map((item: Props, index: number) => (
          <Link to={`/categories/${item.name}`} key={index}>
            <span className="flex items-center justify-between w-full">
              {item.name} <span> ({item._count}) </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
