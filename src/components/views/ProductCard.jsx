import React, { useState } from 'react';
import {SpinningIndicator} from './LoadingIndicator'


const ProductCard = ({ product, isLoggedIn, fetchCartItems, onClick, setPopupType, setPopupMessage,setShowPopup }) => {
  const apiUrl = import.meta.env.VITE_API_URL

  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      setPopupType('info')
      setPopupMessage('Please log in to add items to your cart')
      setShowPopup(true)
      return;
    }

    setIsAddingToCart(true);

    try {
      const response = await fetch(`${apiUrl}/add-to-cart/${product.id}`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ quantity }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to add to cart');
      const data = await response.json();
      await fetchCartItems();
    } catch (error) {
      setPopupType('error')
      setPopupMessage('An error occurred while adding to the cart, please try again.')
      setShowPopup(true)
      console.error('An error occurred while adding to the cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      onClick={onClick ? onClick : undefined} // Trigger modal only if onClick is passed
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center space-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click bubbling
              handleDecrease();
            }}
            className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIncrease();
            }}
            className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click bubbling
              handleAddToCart();
            }}
            className={`w-full mt-4 py-2 ${
              isAddingToCart ? 'bg-yellow-400' : 'bg-yellow-500 hover:bg-yellow-600'
            } text-white rounded-lg transition duration-300`}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? <SpinningIndicator /> : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
