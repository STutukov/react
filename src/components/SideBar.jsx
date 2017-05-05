import React from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends React.Component{
	render(){
		return (
			<div id="sidebar" className="sidebar">
				<div className="profile">
					<div className="profile__avatar"></div>
				</div>
				<div className="menu">
					<ul className="menu__list">
						<li className="menu__item"><Link to="/" replace>Home</Link></li>
						<li className="menu__item"><Link to="/profile">Profile</Link></li>
						<li className="menu__item"><Link to="/explore">Explore</Link></li>
						<li className="menu__item"><Link to="/map">Map</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}