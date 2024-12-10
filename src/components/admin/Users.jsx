import React, {useEffect, useState} from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, IconButton, Tooltip} from "@material-tailwind/react";

import {AdminSidebar} from './Sidebar';
import { LoadingIndicator } from '../views/LoadingIndicator';

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Normal",
    value: "normal",
  },
];
 
const TABLE_HEAD = ["User", "Phone", "Role", "Date Joined", ""];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    phone: '0203378702',
    job: "Manager",
    org: "Organization",
    role: 'admin',
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    phone: '0203378702',
    job: "Programator",
    org: "Developer",
    role: 'normal',
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    phone: '0203378702',
    job: "Executive",
    org: "Projects",
    role: 'normal',
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    phone: '0203378702',
    job: "Programator",
    org: "Developer",
    role: 'admin',
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    phone: '0203378702',
    job: "Manager",
    role: 'normal',
    date: "04/10/21",
  },
];


const Users = ({currentUser}) => {
	const apiUrl = import.meta.env.VITE_API_URL;
	const [isLoading, setIsLoading] = useState(true)
	const [users, setUsers] = useState([])

	const fetchUsers = async () => {
	    try {
	        const response = await fetch(`${apiUrl}/admin/get-users`, {
	            method: 'GET',
	            credentials: 'include',
	        });
	        if (!response.ok) {
	            throw new Error(`Error: ${response.statusText}`);
	        }
	        const data = await response.json();
	        console.log('Fetched data:', data);
	        setUsers(data);
	    } catch (error) {
	        console.error('Failed to fetch database:', error);
	        setUsers(null);
	    }
	};


	const initialisePage = async () => {
		setIsLoading(true)
		await fetchUsers()
		setIsLoading(false)
	}

	useEffect(() => {
		initialisePage()
	},[])

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
		              Members list
		            </Typography>
		            <Typography color="gray" className="mt-1 font-normal">
		              See information about all members
		            </Typography>
		          </div>
		        </div>
		        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
		          <Tabs value="all" className="w-full md:w-max">
		            <TabsHeader>
		              {TABS.map(({ label, value }) => (
		                <Tab key={value} value={value}>
		                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
		                </Tab>
		              ))}
		            </TabsHeader>
		          </Tabs>
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
		            {users?.map(
		              ({ id, firstName, lastName, email, phone, role, date }, index) => {
		                const isLast = index === users.length - 1;
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
		                            {firstName} {lastName}
		                          </Typography>
		                          <Typography
		                            variant="small"
		                            color="blue-gray"
		                            className="font-normal opacity-70"
		                          >
		                            {email}
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
		                          {phone ? phone : "None"}
		                        </Typography>
		                      </div>
		                    </td>
		                    <td className={classes}>
		                      <Typography
		                        variant="small"
		                        color="blue-gray"
		                        className="font-normal"
		                      >
		                        {role}
		                      </Typography>
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
	)
}

export default Users

 
