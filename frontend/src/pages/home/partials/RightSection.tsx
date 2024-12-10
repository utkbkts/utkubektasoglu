import { Button } from "@/components/ui/button";

const imageLink = [
  {
    id: 1,
    title: "Where a 'story' is being told without world",
    category: "Music",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    createdAt: "March 17, 2016",
    by: "utku Bektasoglu",
  },
  {
    id: 2,
    title: "Katy Perry's Lifestyle Colors Through the Years",
    category: "Health",
    img: "https://via.placeholder.com/150",
    createdAt: "March 17, 2016",
    by: "utku Bektasoglu",
  },
  {
    id: 3,
    title: "Pixar Unveils Disney Land of the Dead in New Drama",
    category: "Business",
    img: "https://via.placeholder.com/150",
    createdAt: "March 17, 2016",
    by: "utku Bektasoglu",
  },
];

const RightSection = () => {
  return (
    <div className="flex flex-col gap-6">
      {imageLink.map((item) => (
        <div key={item.id} className="flex items-center gap-4">
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <Button size={"sm"} variant={"outline"}>
              {item.category}
            </Button>
            <h3 className="text-md font-semibold mt-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
