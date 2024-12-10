import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeftSection = () => {
  return (
    <div className="col-span-2 relative">
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
        alt="Main"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="bg-gradient-to-t from-black/60 to-black/20 absolute bottom-0 left-0 w-full h-40 z-10"></div>
      <div className="absolute bottom-4 left-4 text-white p-4 rounded-lg shadow-lg z-10">
        <Button size={"md"} variant={"destructive"}>
          Business
        </Button>
        <h3 className="mt-2 text-lg font-semibold">
          Celebrities in the Vanity Fair Coashella Studio
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-white flex items-center gap-1">
            <Calendar size={15} />
            March 17, 2017
          </p>
          <span className="flex items-center gap-1">
            <User size={15} />
            By Utku Bektasoglu
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
