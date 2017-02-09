const path = require('path');
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './container/Main';
import index from './container/App';
import AboutUs from './container/AboutUs';
import Courses from './container/Courses';
import MyProfile from './container/Profile/MyProfile';
import LiveStream from './container/LiveStream/Content';
import admin from './container/Admin';
import Login from './container/Admin/Login';
import Dashboard from './container/Admin/Dashboard';
import Print from './container/Print';

export default (
	<Route path={'/'}>
		<IndexRoute component={Main} />

		<Route path="/aboutUs" component={index}>
			<IndexRoute component={AboutUs} />

		</Route>
		<Route path="/courses/:courseId" component={index}>
			<IndexRoute component={Courses} />
		</Route>
		<Route path="/myprofile" component={index}>
			<IndexRoute component={MyProfile} />
		</Route>
		<Route path="/video" component={index}>
			<IndexRoute component={MyProfile} />
			<Route path=":courseId" component={LiveStream} />
		</Route>
		<Route path="/admin" component={admin}>
			<IndexRoute component={Login} />
			<Route path="dashboard" component={Dashboard} />
			<Route path="printView" component={Print} />
		</Route>
	</Route>
)