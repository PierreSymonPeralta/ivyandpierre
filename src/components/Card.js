import React from 'react'
import './style.css'
import imageUrl from '../assets/img/eloise.jpg'

const Card = (props) => {
	return (
		<div className="card-container">
      <div className="image">
        <img src={imageUrl} alt="desc"/>
      </div>
      <div className="details">
        <p>Firstname Surname</p>
        <p>Role</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
		</div>
	)
}

export default Card
