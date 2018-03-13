import React , { Component } from 'react';
import PropTypes from 'prop-types';

function CommonLabel({htmlFor, label, required}){
	return(
		<label style = {{display : 'block'}} htmlFor = {htmlFor}>
			{label} {required && <span style = {{color : "red"}}> * </span>}
		</label>
	)
}

CommonLabel.propTypes = {
	/*Target element*/
	htmlFor : PropTypes.string.isRequired,

	/*Text for label*/
	label : PropTypes.string.isRequired,

	/*flag for required label*/
	required : PropTypes.bool
}

export default CommonLabel;