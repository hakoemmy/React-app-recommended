import React from 'react';

const validateInput = (props) =>{
    const mesage = (props.foundChars<=5)?'Text too short':'Text long enough';

    return (
        <div>
            <p>{mesage}</p>
        </div>
    )
};

export default validateInput;