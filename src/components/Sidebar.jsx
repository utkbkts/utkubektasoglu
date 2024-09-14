import PropTypes from "prop-types";
import image from "../assets/images/ben.jpg";
import { skillsData } from "../content/Data";
const Sidebar = ({ setTabs, tabs, t }) => {
  const getSkills = (item) => {
    switch (item.toLowerCase().trim()) {
      case "web technologies & languages":
        return t("skills.technologies.header");
      case "front-end technologies":
        return t("skills.frontEnd.header");
      case "backend technologies":
        return t("skills.backend.header");
      case "databases - nosql":
        return t("skills.databasesNoSQL.header");
      case "databases - sql":
        return t("skills.databasesSQL.header");
      case "cloud and storage":
        return t("skills.cloudStorage.header");
      case "containerization and orchestration":
        return t("skills.containerization.header");
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-center gap-4">
          <img
            src={image}
            alt=""
            className="w-32 h-32 rounded-full object-cover"
          />
          <h1 className="border-b border-blue-500">Skills</h1>
          <div className="text-center flex flex-col gap-4">
            {skillsData.map((item) => (
              <ul key={item.id} className="flex flex-col gap-1">
                <h1
                  onClick={() => setTabs(item.id)}
                  className="relative pb-2 text-gray-100"
                >
                  {getSkills(item.category)}
                  <span
                    className={`absolute transition-all duration-300 bottom-0 left-0 w-24 h-[2px] bg-white ${
                      tabs === item.id && "!w-full"
                    }`}
                  ></span>
                </h1>
                {item.skills.map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  t: PropTypes.func.isRequired,
  setTabs: PropTypes.func,
  tabs: PropTypes.number,
};
export default Sidebar;
