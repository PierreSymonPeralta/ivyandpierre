import React from 'react'
import './style.css';

import { Timer } from '../../components'

class SectionTwo extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="intro">
					<h1>Save The Date</h1>
					<p> Sept 08, 2018 </p>
					<Timer />
				</div>
      </div>
		)
	}
}

export default SectionTwo
