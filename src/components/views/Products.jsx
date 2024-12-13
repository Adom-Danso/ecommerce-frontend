import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProductCard from './ProductCard';
import {LoadingIndicator} from './LoadingIndicator'

const Products = ({ isLoggedIn, fetchCartItems, searchInput, setPopupType, setPopupMessage, setShowPopup }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/get_products`);
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products)
    } catch (error) {
      setPopupType('error')
      setPopupMessage('Unable to fetch products. Please try again later.')
      setShowPopup(true)
    }
  };

  const initializePage = async () => {
    setLoading(true);
    await fetchProducts();
    setLoading(false);
  };

  const search = async () => {
    if (searchInput?.length < 1) {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
      );

      setFilteredProducts(filtered);
    }

  }


  useEffect(() => {
    initializePage();
  }, []);

  useEffect(() => {
    search()
  }, [searchInput])

  if (loading) {
    return (
      <LoadingIndicator />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLoggedIn={isLoggedIn}
            fetchCartItems={fetchCartItems}
            onClick={() => setSelectedProduct(product)} // Open modal on product click
            setPopupType={setPopupType}
            setPopupMessage={setPopupMessage}
            setShowPopup={setShowPopup}
          />
        ))}
      </div>

      {/* Modal for Product Details */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setSelectedProduct(null)} // Close modal on overlay click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to overlay
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex justify-center items-center shadow-md transition"
                onClick={() => setSelectedProduct(null)} // Close button
              >
                <span className="text-lg font-bold">×</span>
              </button>

              {/* Use the ProductCard layout for consistency */}
              <ProductCard
                product={selectedProduct}
                isLoggedIn={isLoggedIn}
                fetchCartItems={fetchCartItems}
                setPopupType={setPopupType} 
                setPopupMessage={setPopupMessage} 
                setShowPopup={setShowPopup}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
