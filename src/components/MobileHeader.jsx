import PropTypes from "prop-types";
import { skillsData } from "../content/Data";
import { motion } from "framer-motion";
const MobileHeader = ({ t, setTabs, setActive }) => {
  return (
    <div className="fixed bg-black/80 w-full h-full">
      <ul className="flex flex-col gap-8 items-center justify-center h-full ">
        {skillsData.map((item, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            onClick={() => {
              setTabs(item.id);
              setActive(false);
            }}
            animate={{ opacity: 1 }}
            key={item.id}
            transition={{ duration: 1, delay: index * 0.5 + 0.5 }}
            className="relative"
          >
            {t(`skills.${item.title}.header`)}
            <span className="absolute -bottom-2 bg-white left-0 h-[2px] w-full"></span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
MobileHeader.propTypes = {
  t: PropTypes.func.isRequired,
  setTabs: PropTypes.func,
  setActive: PropTypes.func,
};
export default MobileHeader;
