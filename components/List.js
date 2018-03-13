import React , { Component } from 'react';

class List extends Component {
	constructor{
		super(props);
		this.state = {
			selectedItem : 0
		}
	}

	componentWillUpdate({onChange, items}, nextState){
		if(onChange && nextState.selectedItem !== this.state.selectedItem){
			onChange(items[nextState.selectedItem]);
		}
	}

	nextItem(){
		const {selectedItem} = this.state;

		if(selectedItem === 0){
			return;
		}
		this.setState({selectedItem : selectedItem +1});
	}

	prevItem(){
		const  {selectedItem} = this.state;
		if(selectedItem === 0 ){
			return;
		}
		this.setState ({selectedItem : selectedItem -1});
	}

	render(){
		const {items} = this.props;
		const {selectedItem} = this.state;

	return (
			<ul>
				{
					items.map
				}
			</ul>
		)
	}
}