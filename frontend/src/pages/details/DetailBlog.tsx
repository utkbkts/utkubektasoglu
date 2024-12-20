import { useParams } from "react-router-dom";
import RightBlogSidebar from "../home/sidebar/RightBlogSidebar";
import DetailItem from "./partials/DetailItem";
import { usePostStore } from "@/store/PostStore";
import { useEffect } from "react";

const DetailBlog = () => {
  const params = useParams<{ title: string; id: any }>();
  const { getPostById, posts } = usePostStore();

  useEffect(() => {
    if (params.title && params.id) {
      getPostById({ title: params.title, id: params.id });
    }
  }, [params.title, params.id, getPostById]);

  return (
    <div className="lg:grid grid-cols-3 gap-2">
      {/* Left:Blogs List*/}
      <div className="col-span-2 mt-12">
        <DetailItem post={posts} />
      </div>
      {/* Right:Sidebar */}
      <div className="mt-12 lg:block hidden ">
        <RightBlogSidebar />
      </div>
    </div>
  );
};

export default DetailBlog;
