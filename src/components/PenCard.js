import React from 'react'
import './style.css';

const PenCard = (props) => {
	console.log(window.location.origin + '/assets/img/' + props.src)
	return (
		<div className="pencard-container">
      <div className="image">
				<img src={window.location.origin + '/assets/img/'+ props.src}alt="desc"/>	
				<h1>{props.name}</h1>
				<p>
					{props.desc}
				</p>
      </div>
		</div>
	)
}

export default PenCard
