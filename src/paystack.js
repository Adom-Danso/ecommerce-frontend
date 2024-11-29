// document.getElementById('pay-button').addEventListener('click', payWithPaystack);

function generateRandomReference() {
      const randomNumber = Math.random().toString(36).substr(2, 9); // Generate random number in base36 format
      const timestamp = Date.now().toString(36); // Convert current timestamp to base36 format
      return `${randomNumber}${timestamp}`;
  }

const randomReference = generateRandomReference();

function send_ref() {
    const data = { ref: randomReference };

    // Return the fetch promise so it can be awaited
    return fetch('http://localhost:5000/submit_ref_data', {
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
            console.log('Reference submitted successfully:', data);
        })
        .catch(error => {
            console.error('Error in submitting reference:', error);
        });
}

// Modify the payWithPaystack callback to ensure submit_ref_data completes first
export const payWithPaystack = (e) => {
    e.preventDefault();

    send_ref()
        .then(() => {
            let handler = PaystackPop.setup({
                key: 'pk_test_b3a784f6e80c51512ad4c66f77e82354c642c721',
                email: document.getElementById("email").value,
                amount: document.getElementById("amount").value * 100,
                currency: 'GHS',
                ref: randomReference,
                onClose: function () {
                    alert('Transaction was not completed.');
                },
                callback: function (response) {
                    console.log('Payment successful, response:', response);
                    document.getElementById('paymentForm').submit();
                },
            });

            handler.openIframe();
        })
        .catch((error) => {
            console.error('Error in submitting reference:', error);
            alert('Failed to initialize payment. Please try again.');
        });
};

// function payWithPaystack(e) {
//     e.preventDefault(); 

//     let handler = PaystackPop.setup({
//         key: 'pk_live_44145ccc7c2c714194e4c287f6f23ed89aabd7bd', // Replace with your public key
//         email: document.getElementById("email").value,
//         amount: document.getElementById("amount").value * 100,
//         currency: 'GHS',
//         ref: randomReference,
//         onClose: function () {
//             alert('Transaction was not completed, window closed.');
//         },
//         callback: function (response) {
//             // Send the reference to your backend
//             fetch('/submit_ref_data', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ ref: response.reference })
//             })
//             .then(res => res.json())
//             .then(() => {
//                 // Submit the form or trigger place order logic
//                 document.getElementById('paymentForm').submit();
//             })
//             .catch(err => {
//                 console.error('Error submitting reference:', err);
//                 alert('Error processing payment. Please try again.');
//             });
//         }
//     });

//     handler.openIframe();
// }

// document.getElementById('pay-button').addEventListener('click', send_ref);
// console.log(document.getElementById('pay-button')); // Should log the element if found


// // function send_ref() {
// //     const data = {
// //         ref: randomReference,
// //     };
    
// //     fetch('/submit_ref_data', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(data)
// //     })
// //     .then(response => {
// //         if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //         }
// //         return response.json(); // Parse the JSON response
// //     })
// //     .then(data => {
// //         console.log('Success:', data); // Handle the successful response
// //         // Update UI or handle success scenario
// //     })
// //     .catch(error => {
// //         console.error('Error:', error); // Handle errors
// //         // Update UI or handle error scenario
// //     });
// // }

// send_ref();