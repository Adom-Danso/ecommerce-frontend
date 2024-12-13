import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupMessage = ({ message, type, setShowPopup }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false)
    setShowPopup(false)
  };

  // Styles based on message type
  const typeStyles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed top-4 left-0 w-full z-50 p-4 ${typeStyles[type] || typeStyles.info}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={animationVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            {/* Message */}
            <p className="text-lg font-medium text-center">{message}</p>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-full mt-2 bg-gray-200 text-gray-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300 transition"
              style={{ transform: 'translateX(-50%)', left: '50%' }}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupMessage;
