import { motion } from "framer-motion";

// Define the default animation
const defaultVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={defaultVariants}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;