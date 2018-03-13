import React , { Component } from 'react';
import PropTypes from 'prop-types';


function Icon({image, style}){
	return(
		<div id = "icon" className = "commonIcon">
			<img src = {image} alt = "IMAGE" style = {style} />
		</div>
	);
}

Icon.propTypes = {
	/*Target image*/
	image: PropTypes.isRequired,

	/*Text for label*/
	style : PropTypes.string.isRequired
}

export default Icon;