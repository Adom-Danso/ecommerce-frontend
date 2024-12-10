import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ isLoggedIn, searchInput, setSearchInput, cartItems, logout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Track visibility of mobile search bar

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search visibility on mobile
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setSearchInput(e.target.value.trim())
    }
  }

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-white">
            <NavLink to="/">E-Shop</NavLink>
          </div>

          {/* Navigation Links (hidden on mobile) */}
          <nav className="hidden lg:flex space-x-8">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 text-lg font-medium hover:text-yellow-400 transition"
                // activeClassName="text-yellow-400 font-bold"
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Search Bar (visible on larger screens, mobile toggle) */}
          <div className="flex items-center space-x-4">
            {/* Search Input for Larger Screens */}
            <div className="hidden lg:flex items-center space-x-2">
              <input
                type="search"
                id="search"
                placeholder="Search products..."
                className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2"
                onChange={handleSearch}
                onKeyDown={handleSearch}
              />
              {/* Search Button */}
              <button
                className="border-2 border-gray-500 text-white hover:border-gray-800 text-white px-4 py-2 rounded-lg transition"
                onClick={() => {
                  setSearchInput(document.getElementById('search').value.trim())
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </button>
            </div>

            {/* Mobile Search Button */}
            <button
              className="lg:hidden text-gray-300 hover:text-yellow-400 transition"
              onClick={toggleSearchBar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3a8 8 0 100 16 8 8 0 000-16zM21 21l-5.197-5.197"
                />
              </svg>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            {isLoggedIn && (
              <NavLink
                to="/wishlist"
                className="text-gray-300 text-lg font-medium hover:text-yellow-400 transition"
                // activeClassName="text-yellow-400 font-bold"
              >
                WishList
              </NavLink>
            )}

            {/* Cart Icon */}
            {isLoggedIn && (
              <NavLink
                to="/cart"
                className="relative text-gray-300 hover:text-yellow-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8l-1 2m6-2a1 1 0 11-2 0m5 0a1 1 0 11-2 0M1 1l22 22"
                  />
                </svg>
                {cartItems.cartNumber > 0 &&(
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.cartNumber}
                  </span>
                )}
              </NavLink>
            )}

            {/* Profile Icon */}
            {isLoggedIn && (
              <NavLink
                to="/profile"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A4 4 0 118.362 19h7.276a4 4 0 113.241-1.196M5.121 17.804A4 4 0 013 15.121V9a9 9 0 0118 0v6.121a4 4 0 01-2.121 2.683M5.121 17.804L12 22l6.879-4.196"
                  />
                </svg>
              </NavLink>
            )}

            {/* Sign Up / Login / Logout */}
            {!isLoggedIn ? (
              <>
                <NavLink
                  className="text-gray-300 hover:text-yellow-400 transition"
                  to='/login'
                >
                  Login
                </NavLink>
                <NavLink
                  className="text-gray-300 hover:text-yellow-400 transition"
                  to='register'
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <button
                onClick={logout}
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Logout
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="block lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-yellow-400 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-gray-800 text-gray-300 rounded-md shadow-lg mt-2"
              initial={{ height: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav className="flex flex-col space-y-2 p-4">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-yellow-400 transition"
                    // activeClassName="text-yellow-400 font-bold"
                  >
                    {item}
                  </NavLink>
                ))}
                {/* Only show sign-up/login if not logged in */}
                {!isLoggedIn && (
                  <>
                    <NavLink
                      className="text-gray-300 hover:text-yellow-400 transition"
                      to='/login'
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="text-gray-300 hover:text-yellow-400 transition"
                      to='register'
                    >
                      Sign Up
                    </NavLink>
                  </>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Search (Animated) */}
      <AnimatePresence>
        {isSearchVisible && (
          <motion.div
            className="lg:hidden bg-gray-800 text-gray-200 p-4"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'top' }} // Ensures the scaling happens from the top
          >
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
