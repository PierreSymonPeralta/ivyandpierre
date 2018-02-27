import React from 'react'
import { RoundImage } from '../../components'
import './style.css';

const churchURL = require('../../assets/church.JPG');
const receptionURL = require('../../assets/reception.jpg');

class SectionThree extends React.Component {
	render() {
		const details = [
			{ title: "Ceremony", imageUrl: churchURL, description: "Sacred Heart Parish"},
			{ title: "Reception", imageUrl: receptionURL, description:"Farm House Hotel"}
		];		
		return (
			<div className="section">
				<div className="round-img-cont">
				{
						details.map((item, index)=>{
							return <RoundImage key={index} source={item.imageUrl} title={item.title} description={item.description}/>
						})
					}
				</div>
    	</div>
		)
	}
}

export default SectionThree
