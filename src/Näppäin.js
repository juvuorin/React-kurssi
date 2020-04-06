import React, { useState } from 'react';
import './App.css';
const Näppäin = (props) => {
    
    return (       
           <button className="näppäin" onClick={() => props.painettu(props.alkio)}>{props.alkio}</button>      
    )
}
export default Näppäin