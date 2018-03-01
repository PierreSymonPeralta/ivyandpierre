import React from 'react'
import './style.css';

class RoundImage extends React.Component {
	render() {
    
		return (
			<div className="image-container">
				<a href="http://www.farmhousehotelandcafe.com/">
					<h1>{this.props.title}</h1>
					<img src={this.props.source} alt="desc"/>
					<span>{this.props.description}</span>
				</a>
      </div>
		)
	}
}

export default RoundImage
