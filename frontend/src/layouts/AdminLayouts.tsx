import Sidebar from "@/pages/admin/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayouts = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayouts;
