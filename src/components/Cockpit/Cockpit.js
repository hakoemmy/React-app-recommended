import React from 'react';

import classes from '../Cockpit/CockPit.css';

const cockPit = (props) => {
    const assignedClasses = [];
    let btnClass = null;
    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold); // classes = ['red', 'bold']
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }

  return (
    <div className={classes.CockPit}>
    <h1>Hi, I'm a React App</h1>
    <p className={assignedClasses.join( ' ' )}>This is really working!</p>
    <button
      className={btnClass}
      onClick={props.toggle}>Toggle Persons</button>
  </div>
  );
};



export default cockPit;