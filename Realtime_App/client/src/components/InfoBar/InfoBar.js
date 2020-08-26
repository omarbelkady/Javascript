import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({room}) => (
	<div className="infoBar">
		<div 
			className="leftInnerContainer" style={{width:"20px",height: "20px"}}>
			<img className= "onlineIcon" src={onlineIcon} alt="open 6342 56837 Image" />
				<h3>{room}</h3>
		</div>
		
		<div className="rightInnerContainer" style={{width: "20px", height: "10px"}}>
			<a href="/"><img src={closeIcon} alt="close 6342 56837 Image"/></a>
		</div>

	</div>
)

export default InfoBar;

