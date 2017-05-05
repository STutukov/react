import React from 'react';
import { Link } from 'react-router-dom';

export default class TopBar extends React.Component {
  render() {
    return (
    	<div className="header">
    		<Logo/>
    		<Seacrh/>
    		<User/>
    	</div>
    )
  }
};

class Logo extends React.Component {
    render() {
    	return 	<div className="header__logo">
    				<Link to="/" replace>travelbook</Link>
    			</div>
    }
};

class Seacrh extends React.Component {
    render() {
    	return 	<div className="header__search">
    				<form action="/search/" method="get">
    					<div className="header__search-fields"><input type="text" className="fields" placeholder="Search"/></div>
    					<div className="header__search-btn"><input type="submit" className="btn" value="Search"/></div>
    				</form>
    			</div>
    }
};

class User extends React.Component {
    render() {
    	return 	<div className="header__profile">
    				<div className="header__user">
	    				<Link to="/" replace>
		    				<span className="header__user-name">Tutukov Sergey</span>
		    				<span className="header__user-img"><img src="img/avatar.jpg" height="256" width="256"/></span>
	    				</Link>
	    			</div>
	    			<div className="header__notify">
	    				<i className="header__notify-icon">
	    					<svg>
	    						<use xlinkHref="#search"></use>
	    					</svg>
	    				</i>
	    			</div>
    			</div>
    }
};