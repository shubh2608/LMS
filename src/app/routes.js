import React from 'react';
import { Route, IndexRoute } from 'react-router';

// My Apps
import Main from './Main';
import Dmain from './db/main.js';
import HS from './HS/HS';


export default function () {
	return (
	<Route component={Main} path="/" >
		<IndexRoute component={Dmain}/>
		<Route path="HS" component={HS} />
	</Route>

	);

};