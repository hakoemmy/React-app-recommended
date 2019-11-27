import React, { Component } from 'react';

import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/authContext';


class App extends Component {
   constructor(props){
     super(props);
     console.log('[App.js] constructor');
   };

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

 

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons: persons,
        changeCounter: prevState.changeCounter + 1
      } 
    }
    );
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  loginHandler = () => {
    this.setState({ authenticated: true});
  }
  logoutHandler = () => {
    this.setState({ authenticated: false});
  }
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  render () {
    console.log('[App.js] render');
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
         <Persons
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}
         persons={this.state.persons}
         />
      );
    }


    return (
      <Aux>
        <AuthContext.Provider value={
          {
            authenticated: this.state.authenticated,
            login: this.loginHandler, logout: this.logoutHandler
          }
          }>
        <CockPit 
        title={this.props.appTitle}
        personsLength = {this.state.persons.length}
        showPersons = {this.state.showPersons}
        toggle = {this.togglePersonsHandler}
        />
        {persons}
        </AuthContext.Provider>
     </Aux>
    );
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
}

export default withClass(App, classes.App);
