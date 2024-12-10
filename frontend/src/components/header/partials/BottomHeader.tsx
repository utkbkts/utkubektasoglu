import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";

const imageSlider = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "iKaty Perry’s Lifestyle Colors Through the Years",
    category: "Health",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "iKaty Perry’s Lifestyle Colors Through the Years",
    category: "Health",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "iKaty Perry’s Lifestyle Colors Through the Years",
    category: "Health",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "iKaty Perry’s Lifestyle Colors Through the Years",
    category: "Health",
  },
];

const BottomHeader = () => {
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
      {imageSlider.map((item) => (
        <div key={item.id} className="!flex !items-center !gap-2">
          <img
            src={item.img}
            alt="category"
            title={item.title}
            className="w-12 h-12 object-cover"
          />
          <Button size={"sm"} variant={"destructive"}>
            {item.category}
          </Button>
          <span>{item.title}</span>
        </div>
      ))}
    </Slider>
  );
};

export default BottomHeader;
