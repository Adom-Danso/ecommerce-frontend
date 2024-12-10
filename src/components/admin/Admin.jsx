// import React, { useEffect, useState } from 'react';
// import { LoadingIndicator } from '../views/LoadingIndicator';
// import { Routes, Route } from 'react-router-dom';

// import {AdminSidebar} from './Sidebar';
// import Dashboard from './Dashboard';
// import Inbox from './Inbox';
// import Orders from './Orders';
// import Users from './Users';
// import Products from './Products';

// export const apiUrl = import.meta.env.VITE_API_URL;
// export const [database, setDatabase] = useState(null);
// export const [users, setUsers] = useState(null);
// export const [products, setProducts] = useState(null);
// export const [orders, setOrders] = useState(null);


// export const fetchDataBase = async () => {
//     try {
//         const response = await fetch(`${apiUrl}/admin/get-database`, {
//             method: 'GET',
//             credentials: 'include',
//         });
//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log('Fetched data:', data);
//         setUsers(data.users);
//         setProducts(data.products);
//         setOrders(data.orders);
//     } catch (error) {
//         console.error('Failed to fetch database:', error);
//         setDatabase(null);
//     }
// };


// // const AdminPage = ({ currentUser }) => {
    


    
// //     const initialisePage = async () => {
// //         setIsLoading(true);
// //         await fetchDataBase();
// //         setIsLoading(false);
// //     };

// //     useEffect(() => {
// //         initialisePage();
// //     }, []);

// //     // useEffect(() => {
// //     //     console.log('Database updated:', users);
// //     //     console.log('Database updated:', products);
// //     //     console.log('Database updated:', orders);
// //     // }, [users, products, orders]);

// //     return (
// //     	<div>
// //     		<nav>
// //     			<AdminSidebar currentUser={currentUser} />
// //     		</nav>
            
// //     	</div>
// //     )
// // };

// // export default AdminPage;
