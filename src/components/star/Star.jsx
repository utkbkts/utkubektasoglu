import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Star = ({ x, y, size }) => {
  const variants = {
    animate: {
      x: [x, x + (Math.random() - 0.5) * 4000],
      y: [y, y + (Math.random() - 0.5) * 4000],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      className="star"
      variants={variants}
      initial="animate"
      animate="animate"
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "white",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

Star.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
  size: PropTypes.string,
};

export default Star;
