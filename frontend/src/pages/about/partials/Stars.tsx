import { motion } from "framer-motion";

const Stars = () => {
  const stars = Array.from({ length: 3 }, (_, i) => {
    return (
      <motion.div
        key={i}
        className="w-4 h-4 bg-white rounded-full absolute z-0"
        style={{
          top: `${Math.random() * 200}px`,
          left: `${Math.random() * 200}px`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1], rotate: [0, 360] }}
        transition={{
          duration: Math.random() * 4 + 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    );
  });

  return <div className="absolute w-full h-full">{stars}</div>;
};

export default Stars;
