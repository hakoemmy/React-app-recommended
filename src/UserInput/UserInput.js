import React from 'react';

const userInput = (props) => {
    const inputStyle={
        padding: '10px',
        marginTop:'40px',
        border:'1px solid blue'
    }
    return <input 
    style={inputStyle}
    type="text" 
    placeholder="Type to change"
    onChange={props.changeName}
    value={props.defaultName}
    />;
};

export default userInput;