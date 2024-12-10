import { Button } from "@/components/ui/button";
import LeftSection from "./partials/LeftSection";
import RightSection from "./partials/RightSection";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-body mt-4 border-b border-b-gray-200">
        Latest Blog
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-8 max-w-[1024px] mx-auto">
        {/* Sol Taraf: Tam Ekran Görsel */}
        <LeftSection />

        {/* Sağ Taraf: Üç Bölümlü Liste */}
        <RightSection />
      </div>

      {/* Section One */}
      <div className="bg-[#1F2024] w-full h-full mt-8 rounded-lg">
        <Button variant={"destructive"}>Popular Projects</Button>
      </div>
    </div>
  );
};

export default HomePage;
