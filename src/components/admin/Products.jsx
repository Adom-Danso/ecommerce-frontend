import React, { useEffect, useState } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, Typography, Button, CardBody, Chip, CardFooter, Avatar, IconButton, Tooltip, Input } from "@material-tailwind/react";
import {useNavigate} from 'react-router-dom';

import { AdminSidebar } from './Sidebar';
import { LoadingIndicator } from '../views/LoadingIndicator';

const TABLE_HEAD = ["Product Details", "Price(GHC)", "Date Added", "Image", ""];

const products = ({ currentUser }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigation()
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${apiUrl}/admin/get-products`, {
                method: 'GET',
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Failed to fetch database:', error);
            setProducts(null);
        }
    };

    const initialisePage = async () => {
        setIsLoading(true);
        await fetchProducts();
        setIsLoading(false);
    };

    useEffect(() => {
    	if (currentUser.role === 'admin') {
    		initialisePage()
    	} else {
    		navigate('/home')
    	}
    }, []);

    return (
        <div className='grid grid-cols-12'>
            {isLoading && <LoadingIndicator />}
            <div className='col-span-3'>
                <AdminSidebar currentUser={currentUser} />
            </div>
            <div className="col-span-9">
                <Card className="h-full w-full">
		      <CardHeader floated={false} shadow={false} className="rounded-none">
		        <div className="mb-8 flex items-center justify-between gap-8">
		          <div>
		            <Typography variant="h5" color="blue-gray">
		              Products list
		            </Typography>
		            <Typography color="gray" className="mt-1 font-normal">
		              See information about all products
		            </Typography>
		          </div>
		        </div>
		        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">		       
		          <div className="w-full md:w-72">
		            <Input
		              label="Search"
		              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
		            />
		          </div>
		        </div>
		      </CardHeader>
		      <CardBody className="overflow-scroll px-0">
		        <table className="mt-4 w-full min-w-max table-auto text-left">
		          <thead>
		            <tr>
		              {TABLE_HEAD.map((head) => (
		                <th
		                  key={head}
		                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
		                >
		                  <Typography
		                    variant="small"
		                    color="blue-gray"
		                    className="font-normal leading-none opacity-70"
		                  >
		                    {head}
		                  </Typography>
		                </th>
		              ))}
		            </tr>
		          </thead>
		          <tbody>
		            {products?.map(
		              ({ id, name, description, price, date, image_name }, index) => {
		                const isLast = index === products.length - 1;
		                const classes = isLast
		                  ? "p-4"
		                  : "p-4 border-b border-blue-gray-50";
		 
		                return (
		                  <tr key={id}>
		                    <td className={classes}>
		                      <div className="flex items-center gap-3">
		                        <div className="flex flex-col">
		                          <Typography
		                            variant="small"
		                            color="blue-gray"
		                            className="font-normal"
		                          >
		                            {name}
		                          </Typography>
		                          <Typography
		                            variant="small"
		                            color="blue-gray"
		                            className="font-normal opacity-70"
		                          >
		                            {description}
		                          </Typography>
		                        </div>
		                      </div>
		                    </td>
		                    <td className={classes}>
		                      <div className="flex flex-col">
		                        <Typography
		                          variant="small"
		                          color="blue-gray"
		                          className="font-normal"
		                        >
		                          {price}
		                        </Typography>
		                      </div>
		                    </td>
		                    <td className={classes}>
		                      <Typography
		                        variant="small"
		                        color="blue-gray"
		                        className="font-normal"
		                      >
		                        {date}
		                      </Typography>
		                    </td>
		                    <td className={classes}>
		                      <Typography
		                        variant="small"
		                        color="blue-gray"
		                        className="font-normal"
		                      >
		                        {image_name}
		                      </Typography>
		                    </td>
		                    {/*<td className={classes}>
		                      <Typography
		                        variant="small"
		                        color="blue-gray"
		                        className="font-normal"
		                      >
		                        {date}
		                      </Typography>
		                    </td>
		                    <td className={classes}>
		                      <Typography
		                        variant="small"
		                        color="blue-gray"
		                        className="font-normal"
		                      >
		                        {status}
		                      </Typography>
		                    </td>*/}
		                    <td className={classes}>
		                      <Tooltip content="Edit User">
		                        <IconButton variant="text">
		                          <PencilIcon className="h-4 w-4" />
		                        </IconButton>
		                      </Tooltip>
		                    </td>
		                  </tr>
		                );
		              },
		            )}
		          </tbody>
		        </table>
		      </CardBody>
		    </Card>
            </div>
        </div>
    );
};

export default products;
