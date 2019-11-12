import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p> {props.username}</p>
            <p>The second paragraph</p>
        </div>
    );
}

export default userOutput;