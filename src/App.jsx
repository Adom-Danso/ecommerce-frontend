import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/views/Navbar';
import Products from './components/views/Products';
import CartPage from './components/views/Cart';
import PopupMessage from './components/views/PopupMessage';
import ProfilePage from './components/views/ProfilePage';
import EditProfile from './components/views/EditProfilePage';
import Checkout from './components/views/Checkout';
import RegistrationPage from './components/auth/Register'
import LoginPage from './components/auth/Login'
import {LoadingIndicator} from './components/views/LoadingIndicator'
import { useNavigate } from 'react-router-dom';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(true); // Controls global loading screen
  const [error, setError] = useState(null);
  const [wishList, setWishList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState(null)
  const [popupType, setPopupType] = useState(null)
  const navigate = useNavigate()

  const logout = async () => {
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: 'GET',
      credentials: 'include'
    })
    await setCurrentUser(null)
    await setCartItems([])
    await setWishList([])
    await setIsLoggedIn(false)
    setPopupMessage('Successfully logged out')
    setPopupType('info')
    setShowPopup(true)
    navigate('/')
  }

  const fetchUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/get_current_user`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data);
        setIsLoggedIn(true);
        setError(null); // Clear error on success
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null);
        if (response.status !== 401 && response.status !== 404) {
          setError('Error fetching user data.');
        }
      }
    } catch (error) {
      setError('Network error occurred while fetching user.');
    }
  };

  const fetchCartItems = async () => {
    if (!isLoggedIn || !currentUser) return;

    try {
      const response = await fetch(`${apiUrl}/cart`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
        setError(null); // Clear error on success
      } else {
        setError('Error fetching cart items.');
      }
    } catch (error) {
      setError('Network error occurred while fetching cart.');
    }
  };

  const initializeApp = async () => {
    setGlobalLoading(true);
    await fetchUser();
    setGlobalLoading(false);
  };

  useEffect(() => {
    initializeApp();
  }, []);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      fetchCartItems();
    }
  }, [isLoggedIn, currentUser]);

  return (
    <div>
      {globalLoading ? (
          <LoadingIndicator />
        ) : (
        <>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cartItems={cartItems} logout={logout} />
          { showPopup && <PopupMessage message={popupMessage} type={popupType} />}
          <Routes>
            <Route path="/" element={<Products isLoggedIn={isLoggedIn} />} fetchCartItems={fetchCartItems} setPopupType={setPopupType} setPopupMessage={setPopupMessage} setShowPopup={setShowPopup} />
            <Route path="/home" element={<Products isLoggedIn={isLoggedIn} fetchCartItems={fetchCartItems} setPopupType={setPopupType} setPopupMessage={setPopupMessage} setShowPopup={setShowPopup}/>} />
            <Route path="/profile" element={<ProfilePage isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
            <Route path="/edit-profile" element={<EditProfile fetchUser={fetchUser} isLoggedIn={isLoggedIn} currentUser={currentUser} setPopupType={setPopupType} setPopupMessage={setPopupMessage} setShowPopup={setShowPopup}  />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} isLoggedIn={isLoggedIn} fetchCartItems={fetchCartItems} />} />
            <Route path="/checkout" element={<Checkout isLoggedIn={isLoggedIn} setPopupType={setPopupType} setPopupMessage={setPopupMessage} setShowPopup={setShowPopup} currentUser={currentUser} cartItems={cartItems} fetchCartItems={fetchCartItems} isLoggedIn={isLoggedIn} />} />
            <Route path="/register" element={<RegistrationPage fetchUser={fetchUser} isLoggedIn={isLoggedIn} setPopupType={setPopupType} setPopupMessage={setPopupMessage} setShowPopup={setShowPopup} />} />
            <Route path="/login" element={<LoginPage fetchUser={fetchUser} isLoggedIn={isLoggedIn} />} />
          </Routes>
        </>
      )}
        
    </div>
  )
}
export default App
