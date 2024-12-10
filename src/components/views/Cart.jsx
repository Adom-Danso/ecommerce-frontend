import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { LoadingIndicator, SpinningIndicator } from './LoadingIndicator';


const CartPage = ({ fetchCartItems, cartItems, isLoggedIn }) => {
  const apiUrl = import.meta.env.VITE_API_URL
  const [isLoading, setIsLoading] = useState(true);
  const [removingItemId, setRemovingItemId] = useState(null);
  const [emptyingCart, setEmptyingCart] = useState(false);
  const navigate = useNavigate();

  const handleRemove = async (id) => {
    setRemovingItemId(id); // Set the loading state for the specific item
    try {
      const response = await fetch(`${apiUrl}/delete-cart-item/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to remove item');
      }

      await fetchCartItems(); // Refresh the cart items after removing
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setRemovingItemId(null); // Clear the loading state
    }
  };


  const emptyCartItems = async () => {
    setEmptyingCart(true); // Set the loading state for the specific item
    try {
      const response = await fetch(`${apiUrl}/empty-cart-items`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to remove item');
      }

      await fetchCartItems(); // Refresh the cart items after removing
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setEmptyingCart(false); // Clear the loading state
    }
  };

  // Calculate the total price
  const total = cartItems?.products?.reduce(
    (sum, item) => sum + item.product.price * (item.quantity || 1),
    0
  );

  // Initialize cart items
  const initialiseCart = async () => {
    try {
      setIsLoading(true);
      await fetchCartItems();
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/'); // Navigate back to the previous page if not logged in
    } else {
      initialiseCart();
    }
  }, [isLoggedIn]);

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }


  if (!cartItems?.products || cartItems.products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-3xl">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
          <button onClick={emptyCartItems} className='text-red-600 hover:text-red-200 transition text-lg cursor-pointer'>{emptyingCart ? 'Emptying...' : 'Empty Cart'}</button>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            {cartItems.products.map((item, index) => (
              <div key={item.product.id}>
                {/* Divider Line */}
                {index > 0 && <hr className="border-t border-gray-300 my-4" />}
                <div className="flex items-center">
                  <img
                    src={item.product.image || 'https://via.placeholder.com/100'}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.product.name}</h2>
                    <p className="text-gray-500">Price: ${item.product.price.toFixed(2)}</p>
                    <p className="text-gray-500">Quantity: {item.quantity || 1}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800 mb-2">
                      ${(item.product.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemove(item.product.id)}
                      className={`bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition ${
                        removingItemId === item.product.id ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={removingItemId === item.product.id}
                    >
                      {removingItemId === item.product.id ? <SpinningIndicator /> : 'Remove'}
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div>
            <div className="rounded-lg bg-white p-6 sticky top-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
              <div className="space-y-2">
                {cartItems.products.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <p>{item.product.name} x {item.quantity || 1}</p>
                    <p>${(item.product.price * (item.quantity || 1)).toFixed(2)}</p>
                  </div>
                ))}
                <div className="border-t border-gray-300 mt-4 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <p>Total:</p>
                    <p className="text-blue-600">${total?.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <Link to='/checkout'>
                <button
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition"
                  disabled={cartItems.products.length === 0}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
