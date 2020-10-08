import React from 'react';
import Tilt from 'react-tilt';
import robot from './robot.png';
import './Logo.css';

const Logo = () => 
{
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 250, width: 250 }} >
	 			<div className="Tilt-inner pa5">
	 				<img style={{height: 120, width: 120 }} alt='logo' src={robot}/>
	 			</div>
			</Tilt>
		</div> 
		);
}

export default Logo;