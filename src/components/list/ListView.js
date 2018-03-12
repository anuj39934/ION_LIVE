import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

var containerStyle = {
	width : "100%",
	display :"flex",
	flexDirection : "row",
	listStyleType : "none"
}

var listStyle = {
	display :"flex",
	flexDirection : "row",
	listStyleType : "none"
}

var listItemStyle = {
	height : "200px",
	border : "2px solid",
	minWidth : "200px",
	backgroundColor : "green"
}

export default class ListView extends Component {
	render(){
		if(this.props.data.items){
			var items = this.props.data.items.map(function(item, i){
				return (
						<Item key={item.id} title={item.name} rating={titem.rating} description={item.description} />
					);
			})
		}else {
			var items = '';
		}

		return (
			<div className="TitleList">
				<div className="Title">
					<h1>{this.props.title}</h1>
					<div className="titles-wrapper">
						{items}
					</div>
				</div>
			</div>
		);

		return (
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
          <li data-target="#carousel-example-generic" data-slide-to={1} />
          <li data-target="#carousel-example-generic" data-slide-to={2} />
        </ol>
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
            <li style ={listItemStyle}>ITEM16</li>
            <li style ={listItemStyle}>ITEM17</li>
            <li style ={listItemStyle}>ITEM18</li>
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

		);
	}
}