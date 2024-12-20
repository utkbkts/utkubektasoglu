import { ArrowLeft } from "lucide-react";
import Dashboard from "./partials/dashboard/Dashboard";
import Sidebar from "./partials/sidebar/Sidebar";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container mx-auto ">
      <Link to={"/"}>
        <ArrowLeft className="absolute top-4" size={30} />
      </Link>
      <div className="grid grid-cols-4 mt-12 mb-12 min-h-screen">
        <div className="col-span-1 sticky top-0  bg-[#20202A] lg:flex hidden">
          <Sidebar />
        </div>
        <div className="lg:col-span-3 col-span-full  bg-[#1F1E29] ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
