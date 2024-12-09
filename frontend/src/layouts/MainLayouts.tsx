import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      header
      <div className="flex-grow ">
        <Outlet />
      </div>
      footer
    </div>
  );
};

export default MainLayouts;
