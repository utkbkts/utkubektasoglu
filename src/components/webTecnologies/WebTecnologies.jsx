import { skillsDetail } from "../../content/Data";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const WebTecnologies = ({ t }) => {
  const getDescription = (title) => {
    switch (title.toLowerCase()) {
      case "html":
        return t("webTechnologies.html.body");
      case "javascript":
        return t("webTechnologies.javascript.body");
      case "typescript":
        return t("webTechnologies.typescript.body");
      case "css":
        return t("webTechnologies.css.body");
      default:
        return "";
    }
  };

  const getFeatured = (title) => {
    switch (title.toLowerCase()) {
      case "html":
        return t("webTechnologies.html.featured");
      case "javascript":
        return t("webTechnologies.javascript.featured");
      case "typescript":
        return t("webTechnologies.typescript.featured");
      case "css":
        return t("webTechnologies.css.featured");
      default:
        return "";
    }
  };

  return (
    <div className="h-full w-full pt-12 grid grid-cols-1 gap-4 mb-3">
      {skillsDetail.map((item, index) => (
        <div key={item.id} className="flex gap-2">
          <img src={item.img} alt="" className="w-12 h-12" />
          <div className="flex flex-col gap-1 ">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 + 0.5 }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 + 1 }}
            >
              {getDescription(item.title)}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 + 1.5 }}
              className="border-b border-blue-500"
            >
              {t("plans.header")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 + 2 }}
            >
              {getFeatured(item.title)}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 + 2.5 }}
              className="relative w-full h-2 bg-gray-800 rounded-md"
            >
              <span
                className="absolute top-0 left-0 h-full bg-green-500 rounded-md"
                style={{ width: item.progress }}
              ></span>
              <span className="absolute -right-12 -top-2">{item.progress}</span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

WebTecnologies.propTypes = {
  t: PropTypes.func.isRequired,
};

export default WebTecnologies;
