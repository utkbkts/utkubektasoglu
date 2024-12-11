import Categories from "./Categories";
import SocialIcon from "./SocialIcon";
import Subscribe from "./Subscribe";
import Tags from "./Tags";

const RightBlogSidebar = () => {
  return (
    <div className="flex flex-col items-center">
      <SocialIcon />
      <Subscribe />
      <Tags />
      <Categories />
    </div>
  );
};

export default RightBlogSidebar;
