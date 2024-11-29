import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LoadingIndicator } from './LoadingIndicator'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PopupMessage from './PopupMessage';


const Checkout = ({ cartItems, currentUser, fetchCartItems, isLoggedIn, setPopupType, setPopupMessage,setShowPopup }) => {
  const apiUrl = import.meta.env.VITE_API_URL
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const [step, setStep] = useState(1); // 1: Address, 2: Summary, 3: Payment
  const totalPrice = cartItems.totalPrice;

  const [paymentAddress, setAddress] = useState({
    email: currentUser.email || "",
    phone: currentUser.phone || "",
    address: currentUser.address || "",
    address2: currentUser.address2 || "",
    city: currentUser.city || "",
    country: currentUser.country || "",
  });
  const [errors, setErrors] = useState({});

  function generateRandomReference() {
    const randomNumber = Math.random().toString(36).substr(2, 9); // Generate random number in base36 format
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 format
    return `${randomNumber}${timestamp}`;
  }

  const randomReference = generateRandomReference();


  const handleValidation = () => {
    const newErrors = {};
    if (!paymentAddress.phone) newErrors.phone = "Phone number is required.";
    if (!paymentAddress.address) newErrors.address = "Address is required.";
    if (!paymentAddress.city) newErrors.city = "City is required.";
    if (!paymentAddress.country) newErrors.country = "Country is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNext = () => {
    if (step === 1 && handleValidation()) {
        setStep((prev) => Math.min(prev + 1, 3));
    } else if (step === 2) {
        setStep((prev) => Math.min(prev + 1, 3));
    }
  };


  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const accordionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };


  function send_ref() {
    const data = { ref: randomReference };

    // Return the fetch promise so it can be awaited
    return fetch(`${apiUrl}/submit_ref_data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to submit payment reference');
            return response.json(); // Ensure the backend confirms receipt
        })
        .then(data => {
            console.log('Reference submitted successfully');
        })
        .catch(error => {
            console.error('Error in submitting reference:', error);
        });
  }

  const payWithPaystack = (e) => {
    e.preventDefault();

    send_ref()
        .then(() => {
            let handler = PaystackPop.setup({
                key:  import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
                email: paymentAddress.email,
                amount: totalPrice * 100,
                currency: 'GHS',
                ref: randomReference,
                onClose: function () {
                  setPopupType('error')
                  setPopupMessage('Transaction was not completed.')
                  setShowPopup(true)
                },
                callback: function (response) {
                    console.log('Payment successful, response:');
                    placeOrder(response);
                },
            });

            handler.openIframe();
        })
        .catch((error) => {
            console.error('Error in submitting reference:', error);
            fetchCartItems()
            setPopupType('error')
            setPopupMessage('Failed to initialize payment. Please try again.')
            setShowPopup(true)
        });
  };


  const placeOrder = async (paymentResponse) => {
    try {
        const payload = {
            paymentAddress: paymentAddress,
            totalPrice: totalPrice,
            paystackReference: paymentResponse.reference,
        };

        const response = await fetch(`${apiUrl}/place-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            credentials: 'include',
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to place order');
        }

        fetchCartItems()
        setPopupType('success')
        setPopupMessage('Order placed successfully!')
        setShowPopup(true)
        navigate('/profile');
    } catch (error) {
        setPopupType('error')
        setPopupMessage('An error occured while placing order.')
        setShowPopup(true)
    }
  };


  const initialiseCheckout = async () => {
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
      initialiseCheckout();
    }
  }, [isLoggedIn, navigate]);

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={placeOrder} id='paymentForm' >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {step === 1 && (
            <motion.div initial="hidden" animate="visible" variants={accordionVariants} className="space-y-4">
              <h2 className="text-xl font-semibold">Enter Your Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={paymentAddress.phone}
                    onChange={(e) =>
                      setAddress({ ...paymentAddress, phone: e.target.value })
                    }
                    className="w-full border rounded py-2 px-3"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={paymentAddress.address}
                    onChange={(e) =>
                      setAddress({ ...paymentAddress, address: e.target.value })
                    }
                    className="w-full border rounded py-2 px-3"
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">{errors.address}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address 2 (Optional)"
                    value={paymentAddress.address2}
                    onChange={(e) =>
                      setAddress({ ...paymentAddress, address2: e.target.value })
                    }
                    className="w-full border rounded py-2 px-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    value={paymentAddress.city}
                    onChange={(e) =>
                      setAddress({ ...paymentAddress, city: e.target.value })
                    }
                    className="w-full border rounded py-2 px-3"
                  />
                  {errors.city && (
                    <span className="text-red-500 text-sm">{errors.city}</span>
                  )}
                </div>
                <div>
                  <select
                    value={paymentAddress.country}
                    onChange={(e) =>
                      setAddress({ ...paymentAddress, country: e.target.value })
                    }
                    className="w-full border rounded py-2 px-3"
                  >
                    <option value="">Select Country</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                  {errors.country && (
                    <span className="text-red-500 text-sm">{errors.country}</span>
                  )}
                </div>
              </div>
              <button
                onClick={handleNext}
                disabled={!paymentAddress.phone || !paymentAddress.address || !paymentAddress.city || !paymentAddress.country}
                className={`px-4 py-2 rounded mt-4 ${
                  !paymentAddress.phone || !paymentAddress.address || !paymentAddress.city || !paymentAddress.country
                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Confirm Address
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={accordionVariants}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <ul className="space-y-2">
                {cartItems.products.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>GH₵{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="font-semibold mt-4">Total: GH₵{totalPrice}</div>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  id="proceed"
                >
                  Proceed to Payment
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={accordionVariants}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold">Payment Details</h2>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded py-2 px-3"
                  value={paymentAddress?.email}
                  onChange={(e) =>
                      setAddress({ ...paymentAddress, email: e.target.value })
                    }
                />
              </div>
              <div>
                <label className="block mb-1">Amount</label>
                <input
                  type="text"
                  id='amount'
                  className="w-full border rounded py-2 px-3"
                  value={totalPrice}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border rounded py-2 px-3"
                  defaultValue={currentUser?.firstName}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border rounded py-2 px-3"
                  defaultValue={currentUser?.lastName}
                  readOnly
                />
              </div>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                id='pay-button'
                onClick={payWithPaystack}
              >
                Place Order
              </button>
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Checkout;
