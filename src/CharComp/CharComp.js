import React from 'react';
import './CharComp.css';

const populateChars = (props) => {

    return (
        <div className="CharComp">
          <p onClick={props.clicked}>
          {props.eachChar}
          </p>
        </div>
    );
}

export default populateChars;