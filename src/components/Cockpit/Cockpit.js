import React, { useEffect, useRef, useContext } from 'react';

import classes from '../Cockpit/CockPit.css';
import AuthContext from '../../context/authContext';
import Aux from '../../hoc/Auxilliary';
const cockPit = (props) => {
  const toogleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
   console.log('[CockPit.js] useEffect');
    // setTimeout(()=> {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toogleBtnRef.current.click();
   // combines use of componentDidMount
   // and componentDidUpdate
  },[]);
    const assignedClasses = [];
    let btnClass = null;
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold); // classes = ['red', 'bold']
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }

  return (
    <div className={classes.CockPit}>
    <h1>{props.title}</h1>
    <p className={assignedClasses.join( ' ' )}>This is really working!</p>
    <button
      ref={toogleBtnRef}
      className={btnClass}
      onClick={props.toggle}>Toggle Persons</button>
       {/* <AuthContext.Consumer>
        { context => (
          <Aux>
        <button onClick={context.login}>Log in</button>
        <button onClick={context.logout}>Log out</button>
        </Aux>
        )
        }
       </AuthContext.Consumer> */}

       {  (
          <Aux>
        <button onClick={authContext.login}>Log in</button>
        <button onClick={authContext.logout}>Log out</button>
        </Aux>
        )
        }
        
  </div>
  );
};



export default React.memo(cockPit);