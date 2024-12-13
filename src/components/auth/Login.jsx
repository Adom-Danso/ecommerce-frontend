import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Corrected import for useNavigate
import { LoadingIndicator, SpinningIndicator } from '../views/LoadingIndicator'

const LoginPage = ({ fetchUser, isLoggedIn }) => {
  const apiUrl = import.meta.env.VITE_API_URL

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmails, setUserEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

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

  useEffect(() => {
    setIsLoading(true);
    fetchUserEmails();
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const isUserValid = (inputEmail) => userEmails.includes(inputEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (!isUserValid(formData.email)) {
      newErrors.email = 'Email does not exist';
    }

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${apiUrl}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
          credentials: 'include',
        });

        if (response.status === 401) {
          const errorData = await response.json();
          setErrors({ general: 'Invalid credentials, please try again.' });
          setIsSubmitting(false);
          return;
        }

        const result = await response.json();
        console.log('Login successful:', result);

        await fetchUser(); // Update user state
        setIsSubmitting(false);

        // Show popup message
        

        navigate('/home'); // Redirect to home page after login
        
      } catch (error) {
        console.error('Unexpected error:', error);
        setErrors({ general: 'An unexpected error occurred, please try again.' });
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home'); // Navigate back to the previous page
    }
  }, [isLoggedIn]);

  if (isLoading) {
    return <LoadingIndicator />
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
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

        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-700 text-white font-semibold rounded-md hover:bg-yellow-800 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? <SpinningIndicator /> : 'Log In'}
          </button>
        </div>

        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-yellow-700 hover:text-yellow-800 transition duration-300">
            Forgot Password?
          </a>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-yellow-700 hover:text-yellow-800 transition duration-300">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
