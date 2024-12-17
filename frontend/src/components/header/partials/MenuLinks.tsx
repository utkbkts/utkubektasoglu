import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Features",
    icon: <ChevronDown />,
    dropDown: {
      menuItems: [
        {
          id: 1,
          title: "Full-Stack Development",
          url: "/full-stack-developer",
        },
        { id: 2, title: "Frontend Development", url: "/frontend-developer" },
        { id: 3, title: "Backend Development", url: "/backend-developer" },
      ],
    },
  },
  {
    id: 3,
    title: "Documentation",
    icon: <ChevronDown />,
    dropDown: {
      menuItems: [
        { id: 1, title: "React Fundamentals", url: "/react-fundamentals" },
        { id: 2, title: "API Integration", url: "/api-integration" },
        {
          id: 3,
          title: "Database Optimization",
          url: "/database-optimization",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Software Languages",
    icon: <ChevronDown />,
    dropDown: {
      menuItems: [
        { id: 1, title: "JavaScript", url: "/javascript" },
        { id: 2, title: "Python", url: "/python" },
        { id: 3, title: "TypeScript", url: "/typescript" },
        { id: 4, title: "Go", url: "/go" },
      ],
    },
  },
];
const MenuLinks = () => {
  const [openMenu, setOpenMenu] = useState(null);
  let closeTimeout: any;

  const handleMouseEnter = (id: any) => {
    clearTimeout(closeTimeout);
    setOpenMenu(id);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setOpenMenu(null), 200);
  };

  return (
    <>
      {menuLinks.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          className="relative group "
        >
          <Link
            className="text-[#282828] flex items-center"
            to={item?.url as any}
          >
            {item.title}
            {item.icon && <span className="mt-1">{item.icon}</span>}
          </Link>
          {item.dropDown && openMenu === item.id && (
            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-md rounded-md p-2 z-50">
              {item.dropDown.menuItems.map((subItem) => (
                <Link
                  key={subItem.id}
                  to={subItem.url}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-gray-800 border-b borde-b-gray-200"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MenuLinks;
