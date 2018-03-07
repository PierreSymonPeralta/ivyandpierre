import React from 'react'
import { Card } from '../../components'
import './style.css';

 const People = () => {
  return (
    <div className="section">
      
      <div className="slide">
        <h1>People</h1>
        <div className="intro">
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </div>
      </div>
      
      <div className="slide">
        <h1>Sponcors</h1>
        <div className="intro">
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </div>
      </div>
      
      <div className="slide">
        <h1>Brides Maids</h1>
        <div className="intro">
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </div>
      </div>

      <div className="slide">
        <h1>Grooms men</h1>
        <div className="intro">
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </div>
      </div>

    </div>
  )
 }


export default People
