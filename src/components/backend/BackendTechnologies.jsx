import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { backendDetail } from "../../content/Data";

const BackendTechnologies = ({ t }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:gap-3 gap-6">
      {backendDetail.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.5 + 0.5 }}
          key={item.id}
          className="border border-gray-200 bg-transparent h-full rounded-md flex items-center   justify-center  flex-col  p-4 w-full"
        >
          <div className="flex justify-center w-full">
            <img
              src={item.img}
              className={`w-full h-44 object-cover`}
              alt={item.title}
            />
          </div>
          <div className="p-1 flex flex-col gap-2">
            <h1 className="uppercase text-2xl border-b border-blue-500">
              {t(`backendTechnologies.${item.title.toLowerCase()}.header`)}
            </h1>
            {t(`backendTechnologies.${item.title.toLowerCase()}.body`)
              .split(".")
              .map((part, index) => (
                <span key={index}>{part.trim()}</span>
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
BackendTechnologies.propTypes = {
  t: PropTypes.func.isRequired,
};

export default BackendTechnologies;
