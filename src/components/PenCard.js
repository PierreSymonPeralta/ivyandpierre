import React from 'react'
import './style.css';

const PenCard = (props) => {
	return (
		<div className="pencard-container">
      <div className="image">
				<img src={window.location.origin + '/assets/img/'+ props.src}alt="desc"/>	
      </div>
			<h1>{props.name}</h1>
			<p>{props.desc}</p>
		</div>
	)
}

export default PenCard
