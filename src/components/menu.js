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
								Guide
							</li>
							<li>
								Live
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}