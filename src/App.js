import $ from 'jquery';
import 'fullpage.js';
import React, { Component } from 'react';
import './App.css';

import SectionOne from './pages/section_one/section_one';
import SectionTwo from './pages/section_two/section_two';
import SectionThree from './pages/section_three/section_three';
import SectionFour from './pages/section_four/section_four';

class App extends Component {

  componentDidMount() {
		$('#fullpage').fullpage({
            // sectionsColor: ['#ffffff','	#ffffff', '#ffffff', '#ffffff', '#ccddff'],
            anchors: ['home', 'details', 'footer'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000
        });
  }
  
  render() {
    return (
      <div className="App">
        <div id='fullpage'>
 					<SectionOne></SectionOne>
 					<SectionTwo></SectionTwo>
 					<SectionThree></SectionThree>
           <SectionFour></SectionFour>
 				</div>
      </div>
    );
  }
}
export default App;
