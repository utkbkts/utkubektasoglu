import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { usePostStore } from "@/store/PostStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generateSlug } from "@/helper/date-format";
import { Post } from "@/types/types";

const BottomHeader = () => {
  const { getAll, postsAll } = usePostStore();
  useEffect(() => {
    getAll();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider
      {...settings}
      className="flex items-center justify-between max-w-[1024px] mx-auto pb-4 pt-4"
    >
      {postsAll.map((item: Post) => (
        <Link
          to={`/detail/${generateSlug(item.title)}/${item.id}`}
          key={item.id}
          className="!flex !items-center !gap-2"
        >
          <img
            src={item.image?.[0]?.url || ""}
            alt="category"
            title={item.title}
            className="w-12 h-12 object-cover"
          />
          <Button size={"sm"} variant={"destructive"}>
            {item.category}
          </Button>
          <span>{item.title.slice(0, 40)}...</span>
        </Link>
      ))}
    </Slider>
  );
};

export default BottomHeader;
