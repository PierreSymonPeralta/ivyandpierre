import React from 'react'
import './style.css';

class Timer extends React.Component {
  constructor(){
		super();
		this.state = {
			days: '',
			hours: '',
			minutes: '',
			seconds: ''
		}
  }

  getDateState(){
		console.log('called');
		//get initial offset by seconds
		const secondsLeft = Math.abs(new Date('2018-09-08T00:00:00') - new Date()) / 1000;
		
		const daysLeft = Math.floor(secondsLeft / (3600 * 24));
		const secondsTakenByDay = daysLeft * (24 * 3600);

		const hoursLeft = Math.floor(secondsLeft / 3600) - (daysLeft * 24);
		const secondsTakenByHours = hoursLeft * 3600;
		
		const minutesLeft = Math.floor(secondsLeft / 60) - ((daysLeft * (24 * 60)) + (hoursLeft * 60));
		const secondsTakenByMinutes = minutesLeft * 60;
		
		const lastSecondsLeft = Math.floor(secondsLeft - (secondsTakenByDay + secondsTakenByHours + secondsTakenByMinutes));

		const dateState = {
			days: daysLeft,
			hours: hoursLeft,
			minutes: minutesLeft,
			seconds: lastSecondsLeft
		};
		return dateState;
  }
  
  componentDidMount(){
		setInterval(()=>{this.setState(this.getDateState())}, 1000);
	}
  render() {
		return (
			<div className="timer">
        <div><h1>{this.state.days}</h1><span>days</span></div>
        <div><h1>{this.state.hours}</h1><span>hours</span></div>
        <div><h1>{this.state.minutes}</h1><span>minutes</span></div>
        <div><h1>{this.state.seconds}</h1><span>seconds</span></div>
			</div>
		)
	}
}

export default Timer
