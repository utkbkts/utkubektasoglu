import PropTypes from "prop-types";
import { frontendDetail } from "../../content/Data";
import { motion } from "framer-motion";
const FrontEndTecnologies = ({ t }) => {
  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };
  return (
    <div className="w-full h-full grid grid-cols-1 gap-3">
      {frontendDetail.map((item, index) => (
        <motion.div
          whileHover={hoverEffect}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.5 + 0.5 }}
          key={item.id}
          className="border border-gray-200 bg-transparent md:h-[500px] h-full rounded-md flex items-center justify-center md:flex-row flex-col md:p-0 p-4"
        >
          <div className="md:flex-1  flex justify-center">
            <img
              src={item.img}
              className={`w-16 h-16 rounded-full ${
                item.title === "nextjs" ? "bg-white rounded-full p-1" : ""
              }`}
              alt={item.title}
            />
          </div>
          <div className="flex-[3] p-1 flex flex-col gap-2">
            <h1 className="uppercase text-2xl border-b border-blue-500">
              {t(`frontendTechnologies.${item.title.toLowerCase()}.header`)}
            </h1>
            {t(`frontendTechnologies.${item.title.toLowerCase()}.body`)
              .split(".")
              .map((part, index) => (
                <span key={index}>
                  {part.trim()} <br />
                </span>
              ))}
            <div className="relative w-full h-2 bg-gray-800 rounded-md">
              <span
                className="absolute top-0 left-0 h-full bg-green-500 rounded-md"
                style={{ width: item.progress }}
              ></span>
              <span className="absolute right-0 -top-6">{item.progress}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

FrontEndTecnologies.propTypes = {
  t: PropTypes.func.isRequired,
};

export default FrontEndTecnologies;
