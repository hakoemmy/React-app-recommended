import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/authContext';
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElRef = React.createRef();
    }
    componentDidMount(){
        this.inputElRef.current.focus();
    }
    static contextType = AuthContext;
    render(){
        console.log('[Person.js] rendering....');
        return(
            <Aux>
                {/* <AuthContext.Consumer>
                  { context => 
                       context.authenticated? <p>authenticated!</p>: <p>Please login</p>      
                  }  
                </AuthContext.Consumer> */}
                    { 
                    this.context.authenticated? <p>authenticated!</p>: <p>Please login</p>
                    }
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" 
                 ref={this.inputElRef}
                onChange={this.props.changed}
                value={this.props.name} />
            </Aux>
       
        );
    }
    
};
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person,classes.Person);