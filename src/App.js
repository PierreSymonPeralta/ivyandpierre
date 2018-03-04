import $ from 'jquery';
import 'fullpage.js';
import React, { Component } from 'react';
import './App.css';

import {
  Banner,
  SaveTheDate,
  Details,
  BrideAndGroom,
  People,
  Rsvp,
  Gallery,
  SectionFour
} from './pages';

class App extends Component {

  componentDidMount() {
		$('#fullpage').fullpage({
            anchors: ['home', 'us', 'savethedate', 'details', 'people', 'rsvp'],
            sectionsColor: [null, null, null, null, '#acbb7d'],
            menu: '#home',
            css3: true,
            scrollingSpeed: 750
        });
  }
  
  render() {
    return (
      <div className="App">
        <div id='fullpage'>
 					<Banner/>
          <BrideAndGroom/>
 					<SaveTheDate/>
 					<Details/>
          <People/>
          <Rsvp/>
          <Gallery/>
 				</div>
      </div>
    );
  }
}
export default App;
