import React from 'react';
import ReactListView from 'react-list-view';
import Header from "../Header";
import ListView from '../list/ListView'

const mainPage = {
  backgroundColor : "#474040",
  color : "white"
};


class AboutPage extends React.Component {
	render(){
		return (
			<div style = {mainPage}>
				<Header />
				<ListView />
			</div>
		);
	}
}

export default AboutPage;