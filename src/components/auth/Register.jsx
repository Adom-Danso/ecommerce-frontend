import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingIndicator, SpinningIndicator } from '../views/LoadingIndicator'

const RegistrationPage = ({ fetchUser, isLoggedIn, setPopupType, setPopupMessage,setShowPopup }) => {
  const apiUrl = import.meta.env.VITE_API_URL

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmails, setUserEmails] = useState([]);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    if (name === 'email') {
      // Check if email is valid as the user types
      if (isUserValid(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Email is already in use',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: '',
        }));
      }
    }
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password1) newErrors.password1 = 'Password is required';
    if (formData.password1 !== formData.password2) newErrors.password2 = 'Passwords must match';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  // Fetch user emails from the server
  const fetchUserEmails = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/get_users`);
      const data = await response.json();
      setUserEmails(data.users);
    } catch (error) {
      console.error('Error fetching user emails:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check if the email is valid (i.e., not already in use)
  const isUserValid = (inputEmail) => {
    return userEmails.length > 0 && userEmails.includes(inputEmail);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    // Check if email is already in use
    if (isUserValid(formData.email)) {
      newErrors.email = 'Email is already in use';
    }

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${apiUrl}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password1: formData.password1,
          }),
          credentials: 'include',
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrors({ general: errorData.message || 'Registration failed. Please try again.' });
          setIsSubmitting(false);
          return;
        }

        const result = await response.json();
        console.log('Registration successful:', result);

        await fetchUser(); // Update user state
        setIsSubmitting(false);
        setPopupType('success')
        setPopupMessage('Your account has been created successfully.')
        setShowPopup(true)
        navigate('/home'); // Redirect to home page after registration
      } catch (error) {
        console.error('Unexpected error:', error);
        setErrors({ general: 'An unexpected error occurred, please try again.' });
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors); // Set validation errors
    }
  };

  // Initialize page by fetching user emails
  const initialisePage = async () => {
    setIsLoading(true);
    await fetchUserEmails();
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    } else {
      initialisePage();
    }
  }, [isLoggedIn]);

  if (isLoading) {
    return <LoadingIndicator />
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password1" className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password1"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your password"
          />
          {errors.password1 && <p className="text-red-500 text-sm mt-1">{errors.password1}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="password2" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Confirm your password"
          />
          {errors.password2 && <p className="text-red-500 text-sm mt-1">{errors.password2}</p>}
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
          />
          <label htmlFor="termsAccepted" className="ml-2 text-gray-700">
            I agree to the <span className="text-yellow-700">Terms & Conditions</span>
          </label>
          {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-700 text-white font-semibold rounded-md hover:bg-yellow-800 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? <SpinningIndicator /> : 'Create Account'}
          </button>
        </div>

        {/* General Error */}
        {errors.general && <p className="text-red-500 text-sm mt-2">{errors.general}</p>}
      </form>
    </div>
  );
};

export default RegistrationPage;
