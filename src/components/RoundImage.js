import React from 'react'
import './style.css';

const RoundImage = (props) => {
	return (
		<div className="image-container">
			<a href={props.link}>
				<div class="title">{props.title}</div>
				<img src={props.source} alt="desc"/>
				<span>{props.description}</span>
			</a>
		</div>
	)
}

export default RoundImage
