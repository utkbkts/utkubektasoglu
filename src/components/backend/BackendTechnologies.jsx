import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { backendDetail } from "../../content/Data";

const BackendTechnologies = ({ t }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-gray-300 p-6 w-full"
      initial="hidden"
      animate="visible"
    >
      {backendDetail.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.5 + 0.5 }}
          key={item.id}
          className="w-full max-w-4xl p-6 border border-gray-200 rounded-md mb-6 bg-transparent"
        >
          <div className="flex gap-6 items-center md:flex-row flex-col w-full">
            <motion.img
              src={item.img}
              className="w-16 h-16 rounded-full object-cover bg-green-500 p-2"
              alt="Node.js"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <div className="flex flex-col items-center md:items-start md:text-start text-center">
              <h2 className="text-2xl font-semibold uppercase text-white">
                {t(`backendTechnologies.${item.title.toLowerCase()}.header`)}
              </h2>
              <p className="mt-2">
                {t(`backendTechnologies.${item.title.toLowerCase()}.body`)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
BackendTechnologies.propTypes = {
  t: PropTypes.func.isRequired,
};

export default BackendTechnologies;
