import React from 'react'
import { RoundImage } from '../../components'
import './style.css';

const churchURL = require('../../assets/img/church.JPG');
const receptionURL = require('../../assets/img/reception.jpg');

const Details = () => {
	const details = [
		{ 
			title: "Ceremony",
			source: churchURL,
			description: "Sacred Heart Parish",
			link: "www.google.com"
		},
		{ 
			title: "Reception",
			source: receptionURL,
			description:"Farm House Hotel",
			link: "www.google.com"
		}
	];		
	return (
		<div className="section">
			<div className="round-img-cont">
			{
					details.map((item, index)=>{
						return <RoundImage key={index} {...item}/>
					})
				}
			</div>
		</div>
	)
}

export default Details
