/*jshint esversion: 6 */

import React from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>Change your username:</p>
            <input type="text" style={props.style} onChange={props.changed} value={props.currentName}/>
        </div>
    )
};

export default userInput;
