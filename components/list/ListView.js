import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

var containerStyle = {
	width : "100%",
	display :"flex",
	flexDirection : "row",
	listStyleType : "none",
}

var listStyle = {
	display :"flex",
	flexDirection : "row",
	listStyleType : "none",
}

var listItemStyle = {
	height : "200px",
	border : "2px solid",
	minWidth : "200px",
	backgroundColor : "green",
  margin : "10px 10px"
}
var genre = {
  marginLeft : "50px",
  fontWeigth : "400px"
}

export default class ListView extends Component {
	render(){
		return (
      <div>
      <h3 style = {genre}>SPORTS</h3>
			<div id="carousel-example-generic" data-interval = "false" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            
            <ul className = "carousel-item active" style = {listStyle}>
            <li style ={listItemStyle}>ITEM1</li>
            <li style ={listItemStyle}>ITEM2</li>
            <li style ={listItemStyle}>ITEM3</li>
            <li style ={listItemStyle}>ITEM4</li>
            <li style ={listItemStyle}>ITEM5</li>
            <li style ={listItemStyle}>ITEM6</li>
          </ul>
          </div>
          <div className="item">
            <ul className = "carousel-item" style = {listStyle}>
            <li style ={listItemStyle}>ITEM7</li>
            <li style ={listItemStyle}>ITEM8</li>
            <li style ={listItemStyle}>ITEM9</li>
            <li style ={listItemStyle}>ITEM10</li>
            <li style ={listItemStyle}>ITEM11</li>
            <li style ={listItemStyle}>ITEM12</li>
          </ul>
          </div>
          <div className="item">
            <ul className = "carousel-item" style = {listStyle}>
            <li style ={listItemStyle}>ITEM13</li>
            <li style ={listItemStyle}>ITEM14</li>
            <li style ={listItemStyle}>ITEM15</li>
          </ul>
          </div>
        </div>
        {/* Controls */}
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" />
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" />
        </a>
      </div>
      <h3 style = {genre}>ENTERTAINMENT</h3>
      <div id="carousel2" data-interval = "false" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <ul className = "carousel-item active" style = {listStyle}>
            <li style ={listItemStyle}>ITEM1</li>
            <li style ={listItemStyle}>ITEM2</li>
            <li style ={listItemStyle}>ITEM3</li>
            <li style ={listItemStyle}>ITEM4</li>
            <li style ={listItemStyle}>ITEM5</li>
            <li style ={listItemStyle}>ITEM6</li>
          </ul>
          </div>
          <div className="item">
            <ul className = "carousel-item" style = {listStyle}>
            <li style ={listItemStyle}>ITEM7</li>
            <li style ={listItemStyle}>ITEM8</li>
            <li style ={listItemStyle}>ITEM9</li>
            <li style ={listItemStyle}>ITEM10</li>
            <li style ={listItemStyle}>ITEM11</li>
            <li style ={listItemStyle}>ITEM12</li>
          </ul>
          </div>
          <div className="item">
            <ul className = "carousel-item" style = {listStyle}>
            <li style ={listItemStyle}>ITEM13</li>
            <li style ={listItemStyle}>ITEM14</li>
            <li style ={listItemStyle}>ITEM15</li>
          </ul>
          </div>
        </div>
        {/* Controls */}
        <a className="left carousel-control" href="#carousel2" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" />
        </a>
        <a className="right carousel-control" href="#carousel2" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" />
        </a>
      </div>

      </div>

		);
	}
}