import Dashboard from "./partials/dashboard/Dashboard";
import Sidebar from "./partials/sidebar/Sidebar";

const AboutPage = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-4 mt-12 mb-12 min-h-screen">
        <div className="col-span-1 sticky top-0  bg-[#20202A]">
          <Sidebar />
        </div>
        <div className="col-span-3  bg-[#1F1E29] ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
