import { FooterComponents } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen container mx-auto mds:max-w-[1024px]">
        <div className="flex-grow ">
          <Outlet />
        </div>
      </div>
      <div className="mt-12 mb-12">
        <FooterComponents />
      </div>
    </div>
  );
};

export default MainLayouts;
