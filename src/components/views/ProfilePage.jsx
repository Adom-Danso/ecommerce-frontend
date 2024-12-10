import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingIndicator } from './LoadingIndicator';
import { Link } from 'react-router-dom';
import {DarkBackground} from './DarkBackground';
import OrderModal from './OrderModal';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ currentUser, isLoggedIn }) => {
  const apiUrl = import.meta.env.VITE_API_URL
  const navigate = useNavigate();
  const [orders, setOrders] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [orderToDisplay, setOrderToDisplay] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Define the fadeIn animation
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const fetchOrders = async () => {
    setIsLoading(true);
    const response = await fetch(`${apiUrl}/orders`, {
      method: 'GET',
      credentials: "include",
    });
    const data = await response.json();
    setOrders(data);
    setIsLoading(false);
  };

  const openModal = () => {    
    setModalOpen(!modalOpen);
  }

  const setOrder = (order) => {
    setOrderToDisplay({
      name: order.orderName,
      totalPrice: order.totalPrice,
      orderItems: order.orderItems,
      deliveryDetails: order.deliveryDetails, 
      status: order.status
    });
  }

  const initialisePage = async () => {
    setIsLoading(true);
    await fetchOrders();
    setIsLoading(false);
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    } else {
      initialisePage();
    }
  }, [isLoggedIn]);

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  return (
    <div className="min-h-screen bg-primary-light flex flex-col items-center py-10">
      {/* Header */}
      <motion.div
        {...fadeIn}
        className="w-full max-w-4xl bg-primary p-6 rounded-lg shadow-lg text-center"
      >
        <h1 className="text-3xl font-bold ">My Profile</h1>
        <p className="mt-2">Welcome to your e-commerce profile!</p>
      </motion.div>

      {/* Profile Info */}
      <motion.div
        {...fadeIn}
        className="relative w-full max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{`${currentUser.firstName} ${currentUser.lastName}`}</h2>
            <p className="text-gray-600">{currentUser.email}</p>
          </div>
        </div>

        {/* Edit Button */}
        <Link to='/edit-profile'>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-4 right-4 bg-primary-dark w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </motion.button>
        </Link>
      </motion.div>

      {/* Orders Section */}
      <motion.div
        {...fadeIn}
        className="w-full max-w-4xl mt-6 bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">My Orders</h3>
        { isLoading ? 'Loading...' : (
            <ul className="space-y-4">
              {orders ? (orders.map((order) => (
                  <li key={order.id} className="flex items-center justify-between p-4 bg-primary-light rounded-md shadow">
                    <div>
                      <p className="text-gray-800 font-medium">{order.orderName}</p>
                      <p className="text-gray-600">Status: {order.status}</p>
                    </div>
                    <button className="text-primary-dark font-medium" onClick={() => {
                      openModal();
                      setOrder(order);
                    }}>View Details</button>
                  </li>))) : (<h4>You have no orders</h4>)}
            </ul>
          )}
      </motion.div>
      
      {/* Modal display */}
      { modalOpen && (
        <DarkBackground onclick={openModal}>
          <OrderModal order={orderToDisplay} onClose={openModal} />
        </DarkBackground>
      )}
    </div>
  );
};

export default ProfilePage;
