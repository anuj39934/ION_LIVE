import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render(){
		return (
			<div className = 'jumbotron'>
				<h1>Demo Application</h1>
				<p>Demo Application for displaying the list of user using AJAX</p>
				<Link to="about" className="btn btn-primary btn-lg">Get more info..</Link>
			</div>
		);
	}
}

export default HomePage;