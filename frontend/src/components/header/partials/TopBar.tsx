import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-[#E21228] w-full h-full">
      <div className="max-w-[1024px] mx-auto">
        <ul className="flex items-center gap-4 text-white font-heading p-1 text-sm ">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
