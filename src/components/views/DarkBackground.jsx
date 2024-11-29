import { motion } from 'framer-motion';

const DarkBackground = ({ children, onclick }) => {
  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      style={{ zIndex: 9999 }}  // Ensure background has the highest z-index
      onClick={onclick}
    >
      {/* The content (modal) itself should be unaffected by opacity */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default DarkBackground;
