import React from 'react';
import * as Admin from './Admin'

import {AdminSidebar} from './Sidebar';


const Dashboard = ({currentUser}) => {
	return (
		<div className='grid grid-cols-12'>
			<nav className="col-span-3">
    			<AdminSidebar currentUser={currentUser} />
    		</nav>
    		<div className="col-span-9 bg-blue-400">
				<h2>Dashboard under construction</h2>
			</div>
		</div>
	)
}

export default Dashboard