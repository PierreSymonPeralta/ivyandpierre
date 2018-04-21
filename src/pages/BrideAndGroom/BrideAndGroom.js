import React from 'react';
import './style.css';
import { PenCard } from 'components/';

 const BrideAndGroom = (props) => {
  return (
    <div className="section">
      <div className="pen-container">
        {props.data.map((r, i)=> <PenCard key={i} desc={r.desc} name={r.name} src={r.src}/>)}
      </div>
    </div>
  )
 }


export default BrideAndGroom
