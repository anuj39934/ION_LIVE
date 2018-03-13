import React , { Component } from 'react';
import Logo from './logo';
import Search from './search';
import Menu from './menu';

var style1 = {
	width : "100%"
}

var style2 = {
	width : "10%"
}

var style3 = {
	width : "90%",
	paddingLeft :"28%"
}

var style4 = {
	paddingTop :"9px"
}

var style5 = {
	color :"black",
	backgroundColor : "grey"
}
export default class Header extends Component {
	render() {
		return (
			<nav className="navbar">
  				<div className="container-fluid" style = {style1}>
    				<div className="navbar-header" style = {style2}>
      					<span className="navbar-brand" style = {style4}>ION</span>
    				</div>
    				<ul className="nav navbar-nav" style = {style3}>
					      <li>
					      	<Menu />
					      </li>
					      <form className = "form-inline" role="search" >
								<input type = "search" style = {style5} placeholder = "Search here"></input>
						  </form>
    				</ul>
  				</div>
			</nav>
		);
	}
}