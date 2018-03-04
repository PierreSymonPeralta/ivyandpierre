import React from 'react'
import './style.css'
import imageUrl from '../assets/img/pic.jpg'

const Card = (props) => {
	return (
		<div className="card-container">
			<img src={imageUrl} alt="desc"/>
      <span class="sub-title">The Bride</span>
      <span class="name"></span>
			<p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <span class="social-links"></span>
		</div>
	)
}

export default Card
