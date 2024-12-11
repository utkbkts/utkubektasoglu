import RightBlogSidebar from "../home/sidebar/RightBlogSidebar";
import DetailItem from "./partials/DetailItem";

const DetailBlog = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {/* Left:Blogs List*/}
      <div className="col-span-2 mt-12">
        <DetailItem />
      </div>
      {/* Right:Sidebar */}
      <div className="mt-12">
        <RightBlogSidebar />
      </div>
    </div>
  );
};

export default DetailBlog;
