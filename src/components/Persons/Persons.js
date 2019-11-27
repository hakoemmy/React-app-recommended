import React, {PureComponent} from 'react';

import Person from './Person/Person';
class Persons extends PureComponent{
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons||
    //         nextProps.changed !== this.props.changed||
    //         nextProps.clicked !== this.props.clicked){
    //         return true;
    //     }else{
    //         return false;
    //     } 
    // }

    render(){
        console.log('[Persons.js] rendering....');
        return this.props.persons.map( ( person, index ) => { 
            return <Person
              click={() => this.props.clicked( index )}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.props.changed( event, person.id )} /> 
          } );
    };

    getSnapshotBeforeUpdate(prevProps, prevSate){
        console.log('[Persons.js] getSnapshotBeforeUpdate');

        return { message: 'Snapshot taken'};
    }

    componentDidUpdate(prevProps, prevSate, snapshot){
        console.log('[Persons.js] componentDidUpdate', snapshot);  
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }
    
    };

export default Persons;