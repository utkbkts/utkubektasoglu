import Sidebar from "@/pages/admin/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const AdminLayouts = () => {
  const pathname = useLocation().pathname;
  const isAuth = pathname.startsWith("/admin/auth");
  return (
    <div className="min-h-screen w-full bg-gray-100 flex">
      {/* Sidebar */}
      {!isAuth && (
        <div className="w-64 bg-gray-800 text-white flex flex-col">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayouts;
