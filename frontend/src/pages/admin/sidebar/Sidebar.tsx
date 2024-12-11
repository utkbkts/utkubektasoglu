import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const links = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/users", label: "Users" },
    { path: "/admin/create", label: "Create" },
    { path: "/admin/settings", label: "Settings" },
  ];

  return (
    <div>
      <div className="p-4 text-lg font-semibold border-b text-center border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-4 py-2 rounded ${
              pathname === link.path
                ? "bg-gray-700 text-white font-semibold"
                : "hover:bg-gray-700 text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
