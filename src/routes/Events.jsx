import React from 'react';
import { Outlet } from 'react-router-dom';

function Events() {
	return (
		<div>
			<h4>Events</h4>
			<Outlet />
		</div>
	);
}

export default Events;
