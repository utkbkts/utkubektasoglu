import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateSlug } from "@/helper/date-format";
import { usePostStore } from "@/store/PostStore";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const TagsDetails = () => {
  const { name } = useParams<string>();
  const { getTagsById, postTagDetails } = usePostStore();

  useEffect(() => {
    if (name) {
      getTagsById({ name });
    }
  }, [name]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 font-bold text-3xl text-center text-gray-800">
        Tag Name: <span className="text-red-500">#{name}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postTagDetails.map((item: any) => (
          <Card className="w-full shadow-lg rounded-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
            <Link
              to={`/detail/${generateSlug(item.Post.title)}/${item.Post.id}`}
              className="block"
            >
              <img
                src={item.Post.image?.[0]?.url || ""}
                alt={item.Post.title}
                className="w-full h-56 object-cover"
              />
            </Link>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
                {item.Post.title.slice(0, 50)}...
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-gray-600">
                {item.Post.description.slice(0, 80)}...
              </CardDescription>
              <div className="mt-4 flex items-center justify-between">
                <Button
                  variant={"destructive"}
                  size={"sm"}
                  className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600"
                >
                  {item.Post.category || "Uncategorized"}
                </Button>
                <Link
                  to={`/detail/${generateSlug(item.Post.title)}/${
                    item.Post.id
                  }`}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TagsDetails;
