import SocialIcon from "./SocialIcon";
import Subscribe from "./Subscribe";
import Tags from "./Tags";

const RightBlogSidebar = () => {
  return (
    <div className="flex flex-col items-center sticky top-12">
      <SocialIcon />
      <Subscribe />
      <Tags />
    </div>
  );
};

export default RightBlogSidebar;
