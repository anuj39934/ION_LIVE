import React , { Component } from 'react';
import CommonLabel from './commonLabel';
import Icon from './icon';

export default class Menu extends Component {
	render(){
		return (
			<div id = "menu" className = "col-md-8">
				<div className = "Navigation">
					<nav>
						<ul className = "nav navbar-nav">
							<li className = "active">
								<div className = "menuLogo"> </div>
								<p className = "menuLable"><h4>Guide</h4></p>
							</li>
							<li className = "">
								<div className = " menuLogo"> </div>
								<p className = "menuLable"><h4>Live</h4></p>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}