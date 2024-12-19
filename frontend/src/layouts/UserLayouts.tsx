import { Outlet } from "react-router-dom";

const UserLayouts = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <div className="flex-grow ">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayouts;
