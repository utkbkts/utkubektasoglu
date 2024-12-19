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
      footer
    </div>
  );
};

export default MainLayouts;
