import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
    <div>
      <h1 className="mt-4 mb-4 font-bold text-2xl">Tag Name: #{name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {postTagDetails.map((item: any) => (
          <Card className="w-full">
            <CardHeader>
              <Button variant={"destructive"} size={"sm"} className="w-1/2">
                {item.Post.category}
              </Button>
              <CardTitle>{item.Post.title}</CardTitle>
              <CardDescription>
                {item.Post.description.slice(0, 50)}
              </CardDescription>
              <CardContent>
                <Link
                  to={`/detail/${generateSlug(item.Post.title)}/${
                    item.Post.id
                  }`}
                >
                  <img
                    src={item.Post.image[0].url}
                    alt=""
                    className="w-full h-[400px] object-cover"
                  />
                </Link>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TagsDetails;
