import React from 'react';

import {AdminSidebar} from './Sidebar';


const Inbox = ({currentUser}) => {
	return (
		<div className='grid grid-cols-12'>
			<nav className="col-span-3">
    			<AdminSidebar currentUser={currentUser} />
    		</nav>
    		<div className="col-span-9 bg-blue-400">
				<h2>Inbox under construction</h2>
			</div>
		</div>
	)
}

export default Inbox