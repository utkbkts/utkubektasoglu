import { Outlet } from "react-router-dom";

const UserLayouts = () => {
  return (
    <div className="about-color w-full h-full text-white font-body">
      <div className="container mx-auto flex flex-col min-h-screen ">
        <div className="flex-grow ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayouts;
