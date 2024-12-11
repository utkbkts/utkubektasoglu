import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentBlogsCard = () => {
  return (
    <div className="flex relative">
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
        alt="Main"
        className="w-[280px] h-[210px] object-cover rounded-lg"
      />
      <div className="bg-gradient-to-t from-black/60 to-black/20 absolute top-0 bottom-0 left-0 w-[280px] h-[210px] z-10"></div>
      <div className="  text-black p-4 rounded-lg  ">
        <Button size={"sm"} variant={"destructive"}>
          Business
        </Button>
        <h3 className="mt-2 text-[22px] font-semibold">
          Celebrities in the Vanity Fair Coashella Studio
        </h3>
        <p className="mt-2 text-[13px] font-semibold text-gray-400">
          It bachelor cheerful of mistaken. Tore has sons put upon wife use bred
          seen. Its dissimilar invitation ten has discreti…
        </p>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-black flex items-center gap-1 text-[14px]">
            <Calendar size={15} />
            March 17, 2017
          </p>
          <span className="flex items-center gap-1 text-[14px]">
            <User size={15} />
            By Utku Bektasoglu
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogsCard;
