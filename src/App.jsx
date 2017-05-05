import React from 'react';
import { BrowserRouter as Router,HashRouter, Route, Link } from 'react-router-dom';

import TopBar from './components/TopBar.jsx';
import SideBar from './components/SideBar.jsx';

import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Explore from './components/Explore.jsx';
import Map from './components/Map.jsx';


const App = () => (
	<HashRouter>
		<div className="container">
			<TopBar/>
			<SideBar/>
			<div id="content" className="content">
    			<Route exact path="/" component={Home} />
    			<Route path="/profile" component={Profile} />
    			<Route path="/explore" component={Explore} />
    			<Route path="/map" component={Map} />
    		</div>
		</div>
	</HashRouter>
);

export default App;