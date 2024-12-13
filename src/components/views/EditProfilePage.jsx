import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import {SpinningIndicator} from './LoadingIndicator'


const EditProfile = ({ fetchUser, isLoggedIn, currentUser, setPopupType, setPopupMessage, setShowPopup }) => {
  const apiUrl = import.meta.env.VITE_API_URL
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    address1: currentUser?.address || "",
    address2: currentUser?.address2 || "",
    country: currentUser?.country || "",
    city: currentUser?.city || "",
    zipCode: currentUser?.zipCode || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const initialFormData = { ...formData }; // Copy of initial data for reset

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiUrl}/auth/edit-profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      setIsSubmitting(false);

      if (response.ok) {
        setPopupType('success');
        setPopupMessage('Your user profile has been updated.');
        setShowPopup(true);
        fetchUser()
        navigate(-1)
      } else {
        setPopupType('error');
        setPopupMessage('There was a problem updating your profile. Please try again.');
        setShowPopup(true);
      }
    } catch (error) {
      setIsSubmitting(false);
      setPopupType('error');
      setPopupMessage('An unexpected error occurred. Please try again later.');
      setShowPopup(true);
    }
  };

  const handleDiscard = () => {
    setFormData(initialFormData); // Reset form
    navigate(-1); // Navigate back
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    } else {
      fetchUser();
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-primary-light flex flex-col items-center py-10">
      <motion.div
        {...fadeIn}
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-primary-dark mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Address 1 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Address 1</label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Address 2</label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Enter additional address info"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter your zip code"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-between space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-1/2 font-semibold px-4 py-2 rounded-md ${
                isSubmitting
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-green-700 text-white hover:bg-green-800 active:bg-green-700"
              }`}
            >
              {isSubmitting ? <SpinningIndicator /> : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              className="w-full md:w-1/2 bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-800 active:bg-red-500 transition"
            >
              Discard Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProfile;
