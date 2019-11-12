import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationInput from './ValidationInput/ValidationInput';
import CharComp from './CharComp/CharComp';

class App extends Component {

 state = {
   characters: ''
 };

 getInputHandler = (event) => {
 const inputString = event.target.value;
  this.setState({
    characters: inputString
  }
  );

 }
 deleteCharHandler = index =>{
  const stringToArray = this.state.characters.split('');
  stringToArray.splice(index, 1);
  const updatedString = stringToArray.join('');
  this.setState({characters: updatedString});
 };
  render () {
  let character = '';
  
  character = this.state.characters.split('').map((c, index)=> {
    return <CharComp 
    eachChar={c}
    key={index}
    clicked={()=> this.deleteCharHandler(index)}
    />
    
  });
  
 
    return (
      <div className="App">
        <input onChange={this.getInputHandler} type="text"/>
        <ValidationInput
        foundChars={this.state.characters.length}
        />
        {character}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
