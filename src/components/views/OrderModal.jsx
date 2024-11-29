import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const OrderModal = ({ order, onClose }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg w-96 p-6 relative">
      {/* Close button */}
      <div
        className="absolute top-4 right-4 text-xl cursor-pointer text-yellow-500 hover:text-yellow-600"
        onClick={onClose}
      >
        &times;
      </div>

      {/* Order Header */}
      <div className="text-2xl font-bold text-center mb-4">{order.name}</div>

      {/* Order Summary */}
      <div className="mb-4">
        <span className="text-lg font-semibold">Order Summary</span>
        <div className="mt-4 space-y-2">
          {Object.keys(order.orderItems).map((key) => (
            <div key={key} className="flex justify-between">
              <span className="text-sm">{key}</span>
              <span className="text-sm font-medium">{order.orderItems[key]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price */}
      <div className="border-t border-slate-600 mt-4 pt-4 flex justify-between">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-xl font-bold">{order.totalPrice}</span>
      </div>

      {/* Close Button Animation */}
      <motion.div
        className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-full cursor-pointer text-center hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
      >
        Close
      </motion.div>
    </div>
  );
};

OrderModal.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderItems: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderModal;
