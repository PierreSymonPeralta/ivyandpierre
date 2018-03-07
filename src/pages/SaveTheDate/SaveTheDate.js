import React from 'react'
import './style.css';

import { Timer } from '../../components'

class SaveTheDate extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="title">Save The Date</div>
				<div className="content">
					<p> Sept 08, 2018 </p>
					<Timer />
				</div>
      </div>
		)
	}
}

export default SaveTheDate
