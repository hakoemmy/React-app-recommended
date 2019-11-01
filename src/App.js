import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
     persons: [
      {
         name: 'Emmanuel',
         age: 23
      },
      {
          name: 'Victor',
          age: 22
      },
       {
          name: 'Francoise',
          age: 21
        }
      ]
    };

    switchNameHandler = () =>{
      
      this.setState({
        persons: [
        {
           name: 'Peter',
           age: 24
        },
        {
            name: 'Victor',
            age: 22
        },
         {
            name: 'Francoise',
            age: 22
          }
        ]})
      
    }
  render() {
    return (
    <div className="App">
       <h1>This is React app</h1>
       <p>I am testing!</p>
       <button onClick={this.switchNameHandler}>Swicth Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> and I like wathing movies</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;
